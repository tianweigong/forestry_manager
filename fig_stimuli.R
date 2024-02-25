library(dplyr)
library(ggplot2)
library(Rmisc)
library(tidyr)
library(RColorBrewer)
set.seed(5)

fr=32
sg=1

myCau<-function(c){
  df=data.frame(t=seq(1,fr))%>%
    mutate(cau=NA)
  
  if (c=="i"){
    m1=28
    m2=44
  }else{
    m1=44
    m2=28
  }
  
  point_change=7
  
  w=0.6
  
  for (k in 1:nrow(df)){
    if (k==1){
      df$cau[k]=m1+round(rnorm(1,0,sg))
      next
    }
    if (k<point_change){
      df$cau[k]= round(w*(m1-df$cau[k-1])+rnorm(1,0,sg)+df$cau[k-1])
    }else{
      df$cau[k]=round(w*(m2-df$cau[k-1])+rnorm(1,0,sg)+df$cau[k-1])
    }
  }
  return(df)
}

myEff<-function(df,w,d,a,m1,c="i"){
  df$eff=NA
  for (k in 1:nrow(df)){
    if (k==1){
      df$eff[k]=m1+round(rnorm(1,0,sg))
      next
    }
    if (k<=d){
      df$eff[k]=round(w*(m1-df$eff[k-1])+rnorm(1,0,sg)+df$eff[k-1])
    }else{
      df$eff[k]=round(w*(b*df$cau[k-d]+a - df$eff[k-1])+rnorm(1,0,sg)+df$eff[k-1])
    }
  }
  return(df)
}

b=1

df=myCau(c="i")
df$ShortRigid=myEff(df,w=0.8,d=2,a=-4,m1=24)$eff
df$ShortFlex=myEff(df,w=0.2,d=2,a=-4,m1=24)$eff
df$LongRigid=myEff(df,w=0.8,d=8,a=-4,m1=24)$eff
df$LongFlex=myEff(df,w=0.2,d=8,a=-4,m1=24)$eff

df%>%
  gather(condition, value, ShortRigid:LongFlex)%>%
  mutate(condition=factor(condition,levels = c("ShortRigid","ShortFlex","LongRigid","LongFlex"),
                          labels = c("Short & Rigid","Short & Non-rigid",
                                     "Long & Rigid","Long & Non-rigid")))%>%
  ggplot(aes(x=t-3,y=value,color=condition))+
  geom_hline(yintercept=24,color=scales::alpha("black",0.5),linetype="dashed")+
  geom_hline(yintercept=40,color=scales::alpha("black",0.5),linetype="dashed")+
  geom_line(size=2)+
  geom_line(data=df,aes(x=t-3,y=cau),color="black",size=2,alpha=0.2)+
  scale_x_continuous(limits = c(0,32-7))+
  scale_y_continuous(limits = c(17,47))+
  scale_color_manual(name="Lag & Rigidity",values=c("#377EB8","#984EA3","#4DAF4A","#A65628"))+
  theme_bw()+
  xlab("Time")+
  ylab("Value")+
  theme(text = element_text(size=12),
        axis.title.x = element_text(size=12, face="bold"),    
        axis.title.y = element_text(size=12, face="bold"), 
        panel.grid.major = element_blank(), panel.grid.minor = element_blank(),
        legend.title = element_text(size = 8,face="bold"), 
        legend.title.align=0.5,
        legend.text = element_text(size = 8),
        legend.position = c(.80, .30),
        legend.margin =margin(r=0,l=0,t=0,b=0))+
  annotate("text", x=5.5, y=46, label= "bold(Cause)",color="black",alpha=0.2,size=5,parse = TRUE)

ggsave(file="f_example.pdf",width = 4.8,height = 3)

load("dt.Rda")
df.val=df.val%>%mutate(uni_label=paste(id,trOrder,sep="_"))



myPlot<-function(d){
  d%>%
  mutate(type=paste(delay,change,sep="_")%>%
           factor(levels =c("fast_rigid","fast_flex","slow_rigid","slow_flex"),
                  labels = c("Short-Rigid","Short-Flexible","Long-Rigid","Long-Flexible")
           )
         )%>%
  ggplot(aes(x=frame,y=num_eff,color=type,group=interaction(type,uni_label)))+
    geom_line(alpha=0.2)+
    theme_bw()+
    scale_x_continuous(limits = c(1,32))+
    scale_color_manual(name="Delay-Rigidity",values=c("#377EB8","#984EA3","#4DAF4A","#A65628"))+
    theme_bw()+
    xlab("Time")+
    ylab("Value")+
    theme(text = element_text(size=10),
          axis.title.x = element_text(size=10, face="bold"),    
          axis.title.y = element_text(size=10, face="bold"), 
          panel.grid.major = element_blank(), panel.grid.minor = element_blank(),
          legend.position = "none")
}

 

df.val%>%subset(direct_e=="eff_inc" & 
                      bound=="middle")%>%
  myPlot()+
  geom_hline(yintercept=24,color=scales::alpha("black",0.5),linetype="dashed")+
  geom_hline(yintercept=40,color=scales::alpha("black",0.5),linetype="dashed")+
  scale_y_continuous(limits = c(24-8+3,40+8-3),breaks = seq(24,40,8))

# ggsave(file="inc_middle.pdf",width = 3.5,height = 2.15)


df.val%>%subset(direct_e=="eff_inc" & 
                  bound=="bound")%>%
  myPlot()+
  geom_hline(yintercept=48,color=scales::alpha("black",0.5),linetype="dashed")+
  geom_hline(yintercept=64,color=scales::alpha("black",0.5),linetype="dashed")+
  scale_y_continuous(limits = c(48-8+3,64+8-3),breaks = seq(48,64,8))

# ggsave(file="inc_bound.pdf",width = 3.5,height = 2.15)

df.val%>%subset(direct_e=="eff_dec" & 
                  bound=="bound")%>%
  myPlot()+
  geom_hline(yintercept=24,color=scales::alpha("black",0.5),linetype="dashed")+
  geom_hline(yintercept=8,color=scales::alpha("black",0.5),linetype="dashed")+
  scale_y_continuous(limits = c(8-8+3,24+8-3),breaks = seq(8,24,8))

# ggsave(file="dec_bound.pdf",width = 3.5,height = 2.15)

df.val%>%subset(direct_e=="eff_dec" & 
                  bound=="middle")%>%
  myPlot()+
  geom_hline(yintercept=48,color=scales::alpha("black",0.5),linetype="dashed")+
  geom_hline(yintercept=32,color=scales::alpha("black",0.5),linetype="dashed")+
  scale_y_continuous(limits = c(32-8+3,48+8-3),breaks = seq(32,48,8))

# ggsave(file="dec_middle.pdf",width = 3.5,height = 2.15)


df.val%>%
  ggplot(aes(x=frame,y=num_cau,color=interaction(direct_c),group=interaction(direct_c,uni_label)))+
  geom_line(alpha=0.1)+
  theme_bw()+
  scale_x_continuous(limits = c(1,32))+
  scale_color_manual(name="",values=c("#FF7F00" ,"#FDBF6F"))+#values=c("gray32","gray64")
  theme_bw()+
  xlab("Time")+
  ylab("Value")+
  theme(text = element_text(size=11),
        axis.title.x = element_text(size=11, face="bold"),    
        axis.title.y = element_text(size=11, face="bold"), 
        panel.grid.major = element_blank(), panel.grid.minor = element_blank(),
        legend.position = "none")+
  geom_hline(yintercept=44,color=scales::alpha("black",0.5),linetype="dashed")+
  geom_hline(yintercept=28,color=scales::alpha("black",0.5),linetype="dashed")+
  scale_y_continuous(limits = c(28-8+3,44+8-3),breaks = seq(28,44,8))

# ggsave(file="cause.pdf",width = 4.3,height = 2.8)