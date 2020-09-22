const playerHit = (element_id)=> {
	var box = document.getElementById(element_id);
	var box_content = box.textContent;
	if(box_content == ''){
		box.innerHTML = "X"
	}

	const check = checkWinner();
	if(Object.keys(check).length != 0){

		document.getElementById(check['boxes_ids'][0]).style.backgroundColor = '#ff00ff';
		document.getElementById(check['boxes_ids'][1]).style.backgroundColor = '#ff00ff';
		document.getElementById(check['boxes_ids'][2]).style.backgroundColor = '#ff00ff';

		document.getElementById('winner').textContent = 'Winner: ' + check['winner']
		document.getElementById('winner').style.display = 'block';

	}
	else {
		var computer_hit = computerHit()
		console.log(computer_hit)
		var boxes_obj = computer_hit[0]
		var isWinner = computer_hit[1]['isWinner']

		if(isWinner){
			for(var Id in boxes_obj){
				document.getElementById(Id).style.backgroundColor = '#ff00ff';
				document.getElementById('winner').textContent = 'Winner: O'
				document.getElementById('winner').style.display = 'block';
			}
		}
		
		for(var Id in boxes_obj){
			if(boxes_obj[Id] == ''){
				document.getElementById(Id).textContent = 'O';
				return;
			}
		}
	}
}

const replay = ()=> {
	location.reload();
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
	if((box1 == box2) && (box2 == box3) && box1 != ''){
		return {'winner': box1, 'boxes_ids': ['box1','box2','box3']};
	} 
	else if ((box4 == box5) && (box5 == box6) && box4 != ''){
		return {'winner': box4, 'boxes_ids': ['box4','box5','box6']};
	} 
	else if ((box7 == box8) && (box8 == box9) && box7 != ''){
		return {'winner': box7, 'boxes_ids': ['box7','box8','box9']};
	}
	//check columns
	else if((box1 == box4) && (box4 == box7) && box1 != ''){
		return {'winner': box1, 'boxes_ids': ['box1','box4','box7']};
	} 
	else if ((box2 == box5) && (box5 == box8) && box2 != ''){
		return {'winner': box2, 'boxes_ids': ['box2','box5','box8']};
	} 
	else if ((box3 == box6) && (box6 == box9) && box3 != ''){
		return {'winner': box3, 'boxes_ids': ['box3','box6','box9']};
	}
	//check diagonals
	else if((box1 == box5) && (box5 == box9) && box1 != ''){
		return {'winner': box1, 'boxes_ids': ['box1','box5','box9']};
	} 
	else if((box3 == box5) && (box3 == box7) && box3 != ''){
		return {'winner': box3, 'boxes_ids': ['box3','box5','box7']};
	}
	else {
		return {}
	}
}


const computerHit = ()=> {
	
	var box1 = document.getElementById("box1").textContent;
	var box2 = document.getElementById("box2").textContent;
	var box3 = document.getElementById("box3").textContent;

	var box4 = document.getElementById("box4").textContent;
	var box5 = document.getElementById("box5").textContent;
	var box6 = document.getElementById("box6").textContent;

	var box7 = document.getElementById("box7").textContent;
	var box8 = document.getElementById("box8").textContent;
	var box9 = document.getElementById("box9").textContent;

	var row1 = box1+box2+box3;
	var row2 = box4+box5+box6;
	var row3 = box7+box8+box9;

	var col1 = box1+box4+box7;
	var col2 = box2+box5+box8;
	var col3 = box3+box6+box9;

	var diag1 = box1+box5+box9;
	var diag2 = box3+box5+box7;

	//check a chance to winner
	//check rows
	if(row1 === 'OO'){
		return [{ 'box1': box1, 'box2': box2, 'box3': box3}, {'isWinner': true }]		 
	}
	else if(row2 == 'OO'){
		return [{ 'box4': box4, 'box5': box5, 'box6': box6}, {'isWinner': true }]
	}
	else if(row3 == 'OO'){
		return [{ 'box7': box7, 'box8': box8, 'box9': box9}, {'isWinner': true }]
	}
	//check columns
	else if(col1 == 'OO'){
		return [{ 'box1': box1, 'box4': box4, 'box7': box7}, {'isWinner': true }]
	}
	else if(col2 == 'OO'){
		return [{ 'box2': box2, 'box5': box5, 'box8': box8}, {'isWinner': true }]
	}
	else if(col3 == 'OO'){
		return [{ 'box3': box3, 'box6': box6, 'box9': box9}, {'isWinner': true }]
	}
	//check diagonal
	else if(diag1 == 'OO'){
		return [{ 'box1': box1, 'box5': box5, 'box9': box9}, {'isWinner': true }]
	}
	else if(diag2 == 'OO'){
		return [{ 'box3': box3, 'box5': box5, 'box7': box7}, {'isWinner': true }]
	}

	//check to prevent player be winner
	if(row1 === 'XX'){
		return [{ 'box1': box1, 'box2': box2, 'box3': box3}, {'isWinner': false }]		 
	}
	else if(row2 == 'XX'){
		return [{ 'box4': box4, 'box5': box5, 'box6': box6}, {'isWinner': false }]
	}
	else if(row3 == 'XX'){
		return [{ 'box7': box7, 'box8': box8, 'box9': box9}, {'isWinner': false }]
	}
	//check columns
	else if(col1 == 'XX'){
		return [{ 'box1': box1, 'box4': box4, 'box7': box7}, {'isWinner': false }]
	}
	else if(col2 == 'XX'){
		return [{ 'box2': box2, 'box5': box5, 'box8': box8}, {'isWinner': false }]
	}
	else if(col3 == 'XX'){
		return [{ 'box3': box3, 'box6': box6, 'box9': box9}, {'isWinner': false }]
	}
	//check diagonal
	else if(diag1 == 'XX'){
		return [{ 'box1': box1, 'box5': box5, 'box9': box9}, {'isWinner': false }]
	}
	else if(diag2 == 'XX'){
		return [{ 'box3': box3, 'box5': box5, 'box7': box7}, {'isWinner': false }]
	}

	//check the beter place
	if(row1 === 'O'){
		return [{ 'box1': box1, 'box2': box2, 'box3': box3}, {'isWinner': false }]		 
	}
	else if(row2 == 'O'){
		return [{ 'box4': box4, 'box5': box5, 'box6': box6}, {'isWinner': false }]
	}
	else if(row3 == 'O'){
		return [{ 'box7': box7, 'box8': box8, 'box9': box9}, {'isWinner': false }]
	}
	//check columns
	else if(col1 == 'O'){
		return [{ 'box1': box1, 'box4': box4, 'box7': box7}, {'isWinner': false }]
	}
	else if(col2 == 'O'){
		return [{ 'box2': box2, 'box5': box5, 'box8': box8}, {'isWinner': false }]
	}
	else if(col3 == 'O'){
		return [{ 'box3': box3, 'box6': box6, 'box9': box9}, {'isWinner': false }]
	}
	//check diagonal
	else if(diag1 == 'O'){
		return [{ 'box1': box1, 'box5': box5, 'box9': box9}, {'isWinner': false }]
	}
	else if(diag2 == 'O'){
		return [{ 'box3': box3, 'box5': box5, 'box7': box7}, {'isWinner': false }]
	}

	//other choices
	if(row1 === ''){
		return [{ 'box1': box1, 'box2': box2, 'box3': box3}, {'isWinner': false }]		 
	}
	else if(row2 == ''){
		return [{ 'box4': box4, 'box5': box5, 'box6': box6}, {'isWinner': false }]
	}
	else if(row3 == ''){
		return [{ 'box7': box7, 'box8': box8, 'box9': box9}, {'isWinner': false }]
	}
	//check columns
	else if(col1 == ''){
		return [{ 'box1': box1, 'box4': box4, 'box7': box7}, {'isWinner': false }]
	}
	else if(col2 == ''){
		return [{ 'box2': box2, 'box5': box5, 'box8': box8}, {'isWinner': false }]
	}
	else if(col3 == ''){
		return [{ 'box3': box3, 'box6': box6, 'box9': box9}, {'isWinner': false }]
	}
	//check diagonal
	else if(diag1 == ''){
		return [{ 'box1': box1, 'box5': box5, 'box9': box9}, {'isWinner': false }]
	}
	else if(diag2 == ''){
		return [{ 'box3': box3, 'box5': box5, 'box7': box7}, {'isWinner': false }]
	}


}