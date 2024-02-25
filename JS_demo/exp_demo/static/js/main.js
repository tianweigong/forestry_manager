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

const sti_list={"yvalue":["high","low","high","low","high","low","high","low","high","low","high","low","high","low","high","low"],
								"causal":["pos","pos","neg","neg","pos","pos","neg","neg","pos","pos","neg","neg","pos","pos","neg","neg"],
								"speed":["fast","fast","fast","fast","slow","slow","slow","slow","fast","fast","fast","fast","slow","slow","slow","slow"],
								"change":["rigid","rigid","rigid","rigid","rigid","rigid","rigid","rigid","flex","flex","flex","flex","flex","flex","flex","flex"]}
const trial_list=shuffle([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])

var p_yvalue,p_causal,p_speed,p_change,p_direct;
var timing_num=50000
const myABI=Math.random().toString(36).substring(2, 11)
var mydata=new Array;
var finish_mod=0;
const clickorder=shuffle(["pos","neg","ind"])
const clickdiv={"pos":"<input type='radio' name='myanswer' value='pos' id='myanswer_pos' disabled ='true' onclick='answer_clicked()'>&nbsp<label for='myanswer_pos'>A positive (regular) relationship</label>",
								"neg":"<input type='radio' name='myanswer' value='neg' id='myanswer_neg' disabled ='true' onclick='answer_clicked()'>&nbsp<label for='myanswer_neg'>A negative (inverse) relationship</label>",
								"ind":"<input type='radio' name='myanswer' value='ind' id='myanswer_ind' disabled ='true' onclick='answer_clicked()'>&nbsp<label for='myanswer_ind'>No relationship</label>"}
const clickdivwidth={"pos":260,"neg":260,"ind":150}
//related to ins
const check_keys=[true,true,false,false];
var page_cur=0;

function idpro_check(){
	if(document.getElementById("idpro").value==""){
	}else{
	 $('#btn_idpro').prop('disabled',false)
	}
}

function idpro_show() {
	$('#pg_cons').css('display','none')
	$('#pg_idpro').css('display','block')
}

function ins_show() {
	$('#pg_idpro').css('display','none')
	$('#pg_ins').css('display','block')
	page_cur=1;
	$('#btn_backward').prop('disabled',true)
	answer_button_arrange()
}

function ins_prev(){
	page_cur--;
	if (page_cur==1||page_cur==2 || page_cur==3){
		$('#pg_ins'+page_cur).css('display','block')
		$('#pg_ins'+(page_cur+1)).css('display','none')
		$('#btn_backward').prop('disabled',false)
		$('#btn_forward').prop('disabled',false)
	}

	if (page_cur==1){
		$('#btn_backward').prop('disabled',true)
	}

	if (page_cur==4){
		$('#pg_ins'+page_cur).css('display','block')
		$('#pg_again').css('display','none')
	}
}

function ins_next(){
	page_cur++;
	if (page_cur==2 || page_cur==3 || page_cur==4){
		$('#pg_ins'+page_cur).css('display','block')
		$('#pg_ins'+(page_cur-1)).css('display','none')
		$('#btn_backward').prop('disabled',false)
		$('#btn_forward').prop('disabled',false)
	}

	if (page_cur==4){
		$('#btn_forward').prop('disabled',true)
		click_comprehension()
	}

	if (page_cur==5){
		comprehension_check()
	}

	if (page_cur==6){
		$('#pg_ins').css('display','none')
		$('#pg_game').css('display','block')
		my_trial()
	}

	window.scrollTo(0,0)
}

function click_comprehension(){
	var check_count=0
	for (var i=0;i<check_keys.length;i++){
		var p="check"+Number(i+1)+"_yes"
		var q="check"+Number(i+1)+"_no"
		if (document.getElementById(p).checked || document.getElementById(q).checked){
			check_count=check_count+1
		}
	}
	if (check_count>=check_keys.length){
		$('#btn_forward').prop('disabled',false)
	}
}

function comprehension_check(){
	var check_ans=[]
	for (var i=0;i<check_keys.length;i++){
		var p="check"+Number(i+1)+"_"+["no","yes"][Number(check_keys[i])]
		check_ans[i]=document.getElementById(p).checked
	}
	var k1=check_ans.reduce((a, b) => a + b)==check_keys.length;
	var k2=$('#check5_II').is(":checked") && $('#check5_DD').is(":checked") && 
					$('#check6_ID').is(":checked") && $('#check6_DI').is(":checked") &&
					! ($('#check5_ID').is(":checked") || $('#check5_DI').is(":checked") || 
					$('#check6_II').is(":checked") || $('#check6_DD').is(":checked"))

	if (k1 & k2){
		$('#pg_ins4').css('display','none')
		window.scrollTo(0,0)
		$('#pg_nice').css('display','block')
		$('#btn_backward').prop('disabled',true)
	}else{
		$('#pg_ins4').css('display','none')
		window.scrollTo(0,0)
		$('#pg_again').css('display','block')
		$('#btn_forward').prop('disabled',true)
	}
}


//related to ins end



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

	$('#myanswer_pos').prop('checked', false);
	$('#myanswer_neg').prop('checked', false);
	$('#myanswer_ind').prop('checked', false);

	//$("#btn_test").css('display','block');
	//$("#btn_test").html('Observe');
	$("#btn_test").html("Observe (when you are ready)")

	setTimeout(function(){$("#btn_test").prop('disabled',false)},1000)

	$("#progress_indicator").css('width',Number(100*trial_num/trial_total)+'%');
}


function my_trial(){
	if (trial_num!=-1){
		var ans;
		if (document.getElementById("myanswer_ind").checked){
			ans="ind"
		}else if (document.getElementById("myanswer_pos").checked){
			ans="pos"
		}else if (document.getElementById("myanswer_neg").checked){
			ans="neg"
		}

		mydata.push({"yvalue":p_yvalue,"causal":p_causal,"speed":p_speed,"change":p_change,
								 "direct":p_direct,"answer":ans,
								 "num_cau":num_cau,"num_eff":num_eff
								 });
	}

	if (trial_num>=15){
		$("#pg_game").css('display','none');
		$("#pg_ques").css('display','block');
		return;
	}

	$("#answer_slider").removeClass('slider'); 
	$("#answer_slider").addClass('inact_slider');
	$("#question_container").css('display','none');
	trial_num++;
	play_num=0;
	next_flag=0;

	num_cau=Array(fr);
	num_eff=Array(fr);

	p_yvalue=sti_list.yvalue[trial_list[trial_num]];
	p_causal=sti_list.causal[trial_list[trial_num]];
	p_speed=sti_list.speed[trial_list[trial_num]];
	p_change=sti_list.change[trial_list[trial_num]];
	p_direct=shuffle(["inc","dec"])[0]

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
	myonlinetimer=Date.now();

	//$("#btn_test").prop('disabled', true);

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

function btn_next_click() {
	$("#btn_test").prop('disabled', true);
	if (next_flag==0){
		$("#question_ctn").css("color","#393232");
		$("#myanswer_pos").prop('disabled', false);
		$("#myanswer_neg").prop('disabled', false);
		$("#myanswer_ind").prop('disabled', false);
		sti_play()
	}else{
		$("#question_ctn").css("color","#dcd7d7");
		$("#myanswer_pos").prop('disabled', true);
		$("#myanswer_neg").prop('disabled', true);
		$("#myanswer_ind").prop('disabled', true);
		my_trial()
	}
}

function check_for_next(){
	if (next_flag==1){
		if (document.getElementById("myanswer_ind").checked||document.getElementById("myanswer_neg").checked||document.getElementById("myanswer_pos").checked){
			$("#btn_test").prop('disabled', false);
		}
	}
}

function task_bye(){
	if (finish_mod==0){
		$("#pg_ques").css('display', 'none');
		$("#pg_bye").css('display', 'block');
		finish_mod=1
		// SaveData(1)
	}
}

function SaveData(dbs){
	var exp_id="plant";

	var feedback=document.getElementById("text_feedback").value;
	feedback=feedback.replace(/'/g,"\\'");
	feedback=feedback.replace(/"/g, '\\"');

	var age=document.getElementById("age").value;
	var e = document.getElementById("gender");
	var gender=e.options[e.selectedIndex].value;
	var idpro=document.getElementById("idpro").value;


	if(dbs==0){
		var a = document.createElement("a");
		var file = new Blob([JSON.stringify(
			{theExp:exp_id,
			theID:idpro+",,,"+myABI,
			theAge:age,
			theGender:gender,
			theFeedback:feedback,
			theData:JSON.stringify(mydata)}
			)], 
			{type: "application/json"});
		a.href = URL.createObjectURL(file);
		a.download = 'ForestDetector.json';
		a.click();
		return;
	}


	jQuery.ajax({
		url: 'static/php/save_data.php',
		type:'POST',
		data:{theExp:exp_id,
			theID:idpro+",,,"+myABI+",,,"+clickorder[0]+"_"+clickorder[1]+"_"+clickorder[2],
			theAge:age,
			theGender:gender,
			theFeedback:feedback,
			theData:JSON.stringify(mydata),
			theOnlineData:JSON.stringify(myonlinedata)},
		success:function(data){
			if (data==233){
				$('#well_done').html("Oops!");
				$('#pg_upload').css('display','block');
			}else{
				$('#well_done').html("");
				$('#pg_bye_good').css('display','block');
			}
		},
		error:function(xhr, status, error){
			$('#well_done').html("Oops!");
			$('#pg_upload').css('display','block');
			setTimeout(btn_upload_show,10000) 
		}
	})

}


function finish_upload () {
	$('#pg_upload').css('display','none');
	$('#well_done').html("");
	$('#pg_bye_good').css('display','block');
}

function survey_check(){
	if (document.getElementById("gender_unselected").selected||document.getElementById("age").value==""){
	}else{
		$('#btn_finish').prop('disabled', false)
	}
}

function answer_button_arrange(){
	$('#choice_left').html(clickdiv[clickorder[0]]);
	$('#choice_left').css("width",clickdivwidth[clickorder[0]]+"px");

	$('#choice_middle').html(clickdiv[clickorder[1]]);
	$('#choice_middle').css("width",clickdivwidth[clickorder[1]]+"px");

	$('#choice_right').html(clickdiv[clickorder[2]]);
	$('#choice_right').css("width",clickdivwidth[clickorder[2]]+"px");
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


function answer_clicked(){
	var t=Date.now()-myonlinetimer
	if (document.getElementById("myanswer_ind").checked){
		myonlinedata.push(trial_num+"_"+"ind"+"_"+t);
	}else if (document.getElementById("myanswer_pos").checked){
		myonlinedata.push(trial_num+"_"+"pos"+"_"+t);
	}else if (document.getElementById("myanswer_neg").checked){
		myonlinedata.push(trial_num+"_"+"neg"+"_"+t);
	}
	check_for_next()
}

function fade_allover(){
	sti_flag=0
	next_flag=1
	for (var i=0;i<leaf_max;i++){
		$("#leaf_cau"+i).css("visibility", "hidden")
		$("#leaf_eff"+i).css("visibility", "hidden")
	}
	$("#btn_test").html("The next pair of plants")
	check_for_next()
	// if (play_num==1){
	// 	$("#btn_test").html("Observe Again")
	// 	$("#btn_test").prop('disabled', false)
	// }
	// if (play_num==1){
	// 	$("#btn_test").css('display','none')
	// 	$("#question_container").css('display','block');
	// 	$("#btn_next").css('visibility', 'hidden')
	// }
}

// function slider_show(){
// 	$("#answer_slider").removeClass('inact_slider'); 
// 	$("#answer_slider").addClass('slider');
// 	$("#btn_next").css('visibility', 'visible')
// }

function my_noi(){
	return gs_noi[Math.round(Math.random()*1000)]
}

// function next_show(){
// 	$("#btn_next").css('visibility', 'visible')
// }

function check_num(num){
	return num>2&num<70;
}

function check_num_x(num){
	return num>2&num<62;
}

function btn_upload_show(num){
	$('#btn_upload').prop('disabled', false)
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