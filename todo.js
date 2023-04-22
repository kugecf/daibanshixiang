// 获取元素
const input = document.querySelector('input');
const ul = document.querySelector('ul');

// 添加事件监听器
input.addEventListener('keydown', function(event) {
	if (event.key === 'Enter' && input.value !== '') {
		addTodo();
	}
});

// 添加todo
function addTodo() {
	// 创建元素
	const li = document.createElement('li');
	const checkbox = document.createElement('input');
	const span = document.createElement('span');
	const deleteButton = document.createElement('button');

	// 设置属性
	checkbox.setAttribute('type', 'checkbox');
	span.textContent = input.value;
	deleteButton.textContent = 'Delete';

	// 添加到li中
	li.appendChild(checkbox);
	li.appendChild(span);
	li.appendChild(deleteButton);

	// 添加到ul中
	ul.appendChild(li);

	// 清空input
	input.value = '';

	// 添加事件监听器
	checkbox.addEventListener('change', function() {
		if (checkbox.checked) {
			li.classList.add('completed');
		} else {
			li.classList.remove('completed');
		}
	});

	deleteButton.addEventListener('click', function() {
		li.remove();
	});
}
