let script = document.createElement('script');
script.src = 'https://unpkg.com/imask';
document.head.appendChild(script);

script.onload = () => {
    const form1 = document.forms.orderForm
    const form2 = document.forms.questionForm
    for (let form of [form1, form2]) {
        IMask(
            form.phone,
            '{+7}(000)-000-00-00'
        )
    }
    
}
