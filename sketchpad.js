$(document).ready(function()
{
	populate('#grid', 16, 16);
	
	$('input[name$="clear"]').click(function()
	{
		clear();
	})
	$('input[name$="resize"]').click(function()
	{
		removeTiles();
		resize();
		cellColor();
		
	})
	cellColor();
});

function cellColor()
{
	$('.cell').hover(function()
	{
		$(this).css('background-color', colorRand($(this).attr('id')));
		if($(this).attr('id') > 0)
		{
			var oldID = Number($(this).attr('id'));
			$(this).attr('id', (oldID - 1));
		}
	})
}


// Takes in the counter ID number to determine saturation of the random color.
function colorRand(counter) 
{
	var hue = (Math.ceil(Math.random() * 360)).toString();
	var sat = (Math.ceil(Math.random() * 100)).toString();
	var light = (Number(counter) * 10).toString();

	var newColor = 'hsl(' + hue + ', ' + sat + '%, ' + light + '%)';
	return newColor;
}



function populate(target, rSize, cSize)
{
	var rows = rSize;
	var columns = cSize;
	var divHeight = Math.floor(960/rows);
	var divWidth = Math.floor(960/columns);

	var grid = '<table>';

	for (var i = 0; i < rows; i++)
	{
		grid += '<tr>';
		for (var j = 0; j < columns; j++)
		{
			grid += '<td><div class="cell" id="10"></div></td>';
		}
		grid += '</tr>';
	}
	grid += '</table>';


	$(target).append(grid);

	//resizing the div to fit within the same window
	$('.cell').height(divHeight);
	$('.cell').width(divWidth);
}

function clear()
{
	$('.cell').css('background-color', 'hsl(0, 0%, 100%)');
}

function removeTiles()
{
	$('#grid').empty();
}

function resize()
{
	var rowSize = prompt("How many rows?");
	while(isNaN(rowSize))
	{
		var rowSize = prompt("How many rows?");
	}
	var colSize = prompt("How many columns?");
	while(isNaN(colSize))
	{
		var colSize = prompt("How many columns?");
	}
	populate('#grid', rowSize, colSize)
}
