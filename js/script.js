$(function(){
	
	$('table').on('mouseup keyup', 'input[type=number]', calculateTotals);

	function calculateTotals(){
		var subtotals = $('.item').map(function(idx, val){
			return calculateSubtotal(val); }).get();
		console.log(subtotals);
		const total = subtotals.reduce((a, v)  => a + Number(v),  0);
		$('.total td:eq(3)').text(formatAsCurrency(total));
	}

	function calculateSubtotal(row){
		const $row = $(row);
		const inputs = $row.find('input');
		//console.log(inputs);
		const subtotal = inputs[1].value * inputs[2].value;
 
		$row.find('td:last').text(formatAsCurrency(subtotal));
 
		return subtotal;
	}

	function formatAsCurrency(amount){
		return `$${Number(amount).toFixed(2)}`;
	}	
	

	$('#add').on('click', function(e){
		e.preventDefault();
		const $lastRow = $('.item:last');
		const $newRow = $lastRow.clone();
	
		//alert();
		$newRow.find('input').val('');
		$newRow.find('input').eq(0).val('Item'+($('.item').length+1));
		$newRow.find('input').eq(2).val('1');
		$newRow.find('td:last').text('$0.00');
		$newRow.insertAfter($lastRow);
	
		$newRow.find('input:first').focus();
	});	
	
});	
