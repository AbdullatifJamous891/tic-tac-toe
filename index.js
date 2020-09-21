const playerHit = (element_id)=> {
	var box = document.getElementById(element_id);
	var box_content = box.textContent;
	if(box_content == ''){
		box.innerHTML = "X"
	}
}

const replay = ()=> {

}

const checkWinner = ()=> {
	var box1 = document.getElementById("box1").textContent;
	var box2 = document.getElementById("box2").textContent;
	var box3 = document.getElementById("box3").textContent;

	var box4 = document.getElementById("box4").textContent;
	var box5 = document.getElementById("box5").textContent;
	var box6 = document.getElementById("box6").textContent;

	var box7 = document.getElementById("box7").textContent;
	var box8 = document.getElementById("box8").textContent;
	var box9 = document.getElementById("box9").textContent;

	//check rows
	if((box1 == box2) && (box2 == box3)){
		return {'winner': box1, 'boxes_ids': ['box1','box2','box3']};
	} 
	else if ((box4 == box5) && (box5 == box6)){
		return {'winner': box4, 'boxes_ids': ['box4','box5','box6']};
	} 
	else if ((box7 == box8) && box8 == box9){
		return {'winner': box7, 'boxes_ids': ['box7','box8','box9']};
	}
	//check columns
	else if((box1 == box4) && (box4 == box7)){
		return {'winner': box1, 'boxes_ids': ['box1','box4','box7']};
	} 
	else if ((box2 == box5) && (box5 == box8)){
		return {'winner': box2, 'boxes_ids': ['box2','box5','box8']};
	} 
	else if ((box3 == box6) && box6 == box9){
		return {'winner': box3, 'boxes_ids': ['box3','box6','box9']};
	}
	//check diagonals
	else if((box1 == box5) && (box5 == box9)){
		return {'winner': box1, 'boxes_ids': ['box1','box5','box9']};
	} 
	else if((box3 == box5) && (box3 == box7)){
		return {'winner': box3, 'boxes_ids': ['box3','box5','box7']};
	}



}