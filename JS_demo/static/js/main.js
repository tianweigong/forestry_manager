const leaf_size=28;//remember to change the csc file if you change here
const leaf_size_x=24;
const ctn_size=350;
const ctn_wid=150;
const leaf_max=84;
const leaf_max_x=64;
const frame_length=750;//ms
const node_cau="#node_left";
const node_eff="#node_right";

const fr=32;
const point_change=7;
const w_cau=0.6;
const trial_total=16;

var pos_cau_x=new Array,pos_cau_y=new Array,pos_eff_x=new Array,pos_eff_y=new Array;
var rank_pos_cau=new Array;
var pic_cau,pic_eff;
var num_cau=new Array,num_eff=new Array,pos_t_cau=new Array,pos_t_eff=new Array;
var trial_num=-1;
var play_num=0;
var sti_flag=0;
var next_flag=0;
var myonlinedata=new Array;
var myonlinetimer=0;

// const sti_list={"yvalue":["high","low","high","low","high","low","high","low","high","low","high","low","high","low","high","low"],
// 								"causal":["pos","pos","neg","neg","pos","pos","neg","neg","pos","pos","neg","neg","pos","pos","neg","neg"],
// 								"speed":["fast","fast","fast","fast","slow","slow","slow","slow","fast","fast","fast","fast","slow","slow","slow","slow"],
// 								"change":["rigid","rigid","rigid","rigid","rigid","rigid","rigid","rigid","flex","flex","flex","flex","flex","flex","flex","flex"]}

var p_yvalue,p_causal,p_speed,p_change,p_direct;
var timing_num=50000


function my_trial_initial(){
	//draw all leaves
	var tmp="",tmp1,tmp2,tmp3;
	for (i=0;i<leaf_max_x;i++){
		 tmp1="<div id='leaf_cau"+i+"' class='leaf_ctn' style='margin-top: "+(pos_cau_y[i])+"px;margin-left: "+(pos_cau_x[i])+"px;'>"
		 tmp2="<img class='leaf_x' src='static/img/"+pic_cau+".png'>"
		 tmp3="</div>"
		 tmp=tmp+tmp1+tmp2+tmp3
	}
	$(node_cau).html(tmp+"<div id='node_cau_rec' class='node_rec'></div>")
	tmp=""
	for (i=0;i<leaf_max;i++){
		 tmp1="<div id='leaf_eff"+i+"' class='leaf_ctn' style='margin-top: "+(pos_eff_y[i])+"px;margin-left: "+(pos_eff_x[i])+"px;'>"
		 tmp2="<img class='leaf' src='static/img/"+pic_eff+".png'>"
		 tmp3="</div>"
		 tmp=tmp+tmp1+tmp2+tmp3
	}
	$(node_eff).html(tmp)

	setTimeout(function(){$("#btn_test").prop('disabled',false)},1000)

}

function my_trial(){

	trial_num=randPerm(15)[1]+1

	num_cau=Array(fr);
	num_eff=Array(fr);

	var e,m,n;
	
	e=document.getElementById("DirectionX");
	if (e.options[e.selectedIndex].value=="Increase"){
		p_direct="inc"
	}else{
		p_direct="dec"
	}


	e=document.getElementById("Slope");
	if (e.options[e.selectedIndex].value=="Positive"){
		p_causal="pos"
	}else{
		p_causal="neg"
	}


	var tmp1=["IncreasePositiveBoundary","IncreasePositiveMiddle","IncreaseNegativeBoundary","IncreaseNegativeMiddle",
	 "DecreasePositiveBoundary","DecreasePositiveMiddle","DecreaseNegativeBoundary","DecreaseNegativeMiddle"]
	var tmp2=["high","low","low","high","low","high","high","low"]
	e=document.getElementById("DirectionX");
	m=document.getElementById("Slope");
	n=document.getElementById("RangeY");
  p_yvalue=tmp2[tmp1.indexOf(e.options[e.selectedIndex].value+m.options[m.selectedIndex].value+n.options[n.selectedIndex].value)]

	e=document.getElementById("Lag");
	if (e.options[e.selectedIndex].value=="Short"){
		p_speed="fast"
	}else{
		p_speed="slow"
	}

		e=document.getElementById("Rigidity");
	if (e.options[e.selectedIndex].value=="Rigid"){
		p_speed="rigid"
	}else{
		p_speed="flex"
	}

	var m1,m2,dl,dl,m1_eff,w,al,be;
	if (p_direct=="inc"){m1=28;m2=44}else{m1=44;m2=28};
	if (p_speed=="fast"){dl=2}else{dl=8};
	if (p_change=="rigid"){w=0.8}else{w=0.2};

	if (p_causal=="pos"){
		be=1
		if (p_yvalue=="low"){
			m1_eff=24
			if (p_direct=="inc"){al=-4}else{al=-20}
		}else{
			m1_eff=48
			if (p_direct=="inc"){al=20}else{al=4}
		}
	}else{
		be=-1
		if (p_yvalue=="low"){
			m1_eff=24
			if (p_direct=="inc"){al=52}else{al=68}
		}else{
			m1_eff=48
			if (p_direct=="inc"){al=76}else{al=92}
		}
	}

	while (1){
		//cause
		for (var i=0;i<fr;i++){
			if (i==0){num_cau[i]=m1+Math.round(my_noi());continue}
			if (i<(point_change-1)){
				num_cau[i]= Math.round(w_cau*(m1-num_cau[i-1])+my_noi()+num_cau[i-1])
			}else{
				num_cau[i]=Math.round(w_cau*(m2-num_cau[i-1])+my_noi()+num_cau[i-1])
			}
		}
		//effect
		for (i=0;i<fr;i++){
			if (i==0){num_eff[i]=m1_eff+Math.round(my_noi());continue}
			if (i<dl){
				num_eff[i]=Math.round(w*(m1_eff-num_eff[i-1])+my_noi()+num_eff[i-1])
			}else{
				num_eff[i]=Math.round(w*(be*num_cau[i-dl]+al - num_eff[i-1])+my_noi()+num_eff[i-1])
			}
		}
		if (num_cau.every(check_num_x) && num_eff.every(check_num)){break;}
	}


	i=shuffle([6,7,8,9,10,11])[0]
	pos_cau_x=eval("pos_x"+i);
	pos_cau_y=eval("pos_y"+i);
	rank_pos_cau=eval("rank"+i);

	i=randPerm(6)[0]
	pos_eff_x=eval("pos_x"+i);
	pos_eff_y=eval("pos_y"+i);
	
	pic_cau="LeafA"+(trial_num+1)
	pic_eff="LeafB"+(trial_num+1)


	var pos;
	for (i=0;i<num_cau.length;i++){//i<t_total
		pos=shuffle(rank_pos_cau.slice(0,num_cau[i]+6)).slice(0,num_cau[i])
		pos_t_cau[i]=pos

		pos=randPerm(leaf_max).slice(0,num_eff[i])
		pos_t_eff[i]=pos
	}
	my_trial_initial();
}


function sti_play(){
	if (sti_flag==1){return}
	sti_flag=1

	$("#btn_test").prop('disabled', true);
	$("#btn_load").prop('disabled', true);

	play_num++;
	setTimeout(fade_allover,fr*frame_length);

	var i,k,diff;
	for (i=0;i<num_cau.length;i++){//i<t_total
		setTimeout(fade_begin,i*frame_length,pos_t_cau[i],'leaf_cau')
		setTimeout(fade_begin,i*frame_length,pos_t_eff[i],'leaf_eff')
	}

	for (i=1;i<num_cau.length;i++){
		diff=$(pos_t_cau[i-1]).not(pos_t_cau[i])
		if(diff.length>0){
			setTimeout(fade_end,i*frame_length,diff,'leaf_cau')
		}

		diff=$(pos_t_eff[i-1]).not(pos_t_eff[i])
		if(diff.length>0){
			setTimeout(fade_end,i*frame_length,diff,'leaf_eff')
		}
	}
}


function fade_begin(pos,names){
	for (var k=0;k<pos.length;k++){
		$("#"+names+pos[k]).css("visibility", "visible")
	}
}

function fade_end(pos,names){
	for (var k=0;k<pos.length;k++){
		$("#"+names+pos[k]).css("visibility", "hidden")
	}
}



function fade_allover(){
	sti_flag=0
	for (var i=0;i<leaf_max;i++){
		$("#leaf_cau"+i).css("visibility", "hidden")
		$("#leaf_eff"+i).css("visibility", "hidden")
	}
	$("#btn_load").prop('disabled', false)
}

function my_noi(){
	return gs_noi[Math.round(Math.random()*1000)]
}


function check_num(num){
	return num>2&num<70;
}

function check_num_x(num){
	return num>2&num<62;
}


function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function randPerm(n) {
  var result = new Array(n)
  result[0] = 0
  for(var i=1; i<n; ++i) {
    var idx = (Math.random()*(i+1))|0
    if(idx < i) {
      result[i] = result[idx]
    }
    result[idx] = i
  }
  return result
}

//pos_random()
// ipcheck()