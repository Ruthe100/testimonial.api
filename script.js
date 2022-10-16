let contain =document.querySelector('.contain')
const displayTestimonial=(data)=>{
    contain.innerHtml = `<div class ="card p-3">
    `
}






let endpoint ='https://testimonialapi.toolcarton.com/api'
fetch(endpoint)
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log((data));
    displayTestimonial(data)
})