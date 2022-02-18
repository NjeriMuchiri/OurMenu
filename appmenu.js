const menu = [
    {
        id:1,
        title:"Coffee",
        price:13.89,
        category:"Breakfast",
        img:"./Images/coffeedessert.jpg",
        desc:`Coffee with and without cream available just for you.Order!Order!Order!Enjoy!!`,
    },
    {
        id:2,
        title:"Chinese food",
        category:"Lunch",
        price:13.57,
        img:"./Images/chinese1.jpeg",
        desc:`Try our new chinese culinary that will leave your mouth wanting for more!Welcome one,welcome all!`,
    },
{
        id:3,
        title:"LaCafe Special",
        category:"Dinner",
        price:9.89,
        img:"./Images/culinaryd.jpg",
        desc:`Our own special dish just for you!`,
    },
{
        id:4,
        title:"Dessert",
        category:"Breakfast",
        price:10.89,
        img:"./Images/dessert1.jpg",
        desc:`Enjoy our dessert that has our own house made secret ingredients.`,
    },
{
        id:5,
        title:"Family Dinner",
        category:"Dinner",
        price:12.00,
        img:"./Images/dinner.jpg",
        desc:`Get yourself a takeout and enjoy the dinner with your friends and families. we make dinner just for you!`,
    },
{
        id:6,
        title:"Stew",
        category:"Lunch",
        price:14.89,
        img:"./Images/food.jpg",
        desc:`Our skilled in house chef prepare the sweetest and scrumptious foods just for you!Welcome all.`,
    },
{
        id:7,
        title:"SpecialBreakfast",
        category:"Breakfast",
        price:15.89,
        img:"./Images/foodv.jpg",
        desc:`We have special breakfast just for you.The meal will make your day!`,
    },
{
        id:8,
        title:"Wine",
        price:19.89,
        category:"Dinner",
        img:"./Images/wine1.jpg",
        desc:`Enjoy our sweet wine straight from our local farm.`,
    },
{
        id:9,
        title:"Stake",
        price:16.89,
        category:"Lunch",
        img:"./Images/stakeindian.jpg",
        desc:`We have our own indian stake that has been proven to be very scrumptious.`,
    },
{
        id:10,
        title:"Pizza",
        category:"Breakfast",
        price:10.89,
        img:"./Images/pizza1.jpg",
        desc:`Here,we have pizza for breakfast.Namaste!!`,
    },
{
        id:11,
        title:"Goodies",
        category:"Lunch",
        price:13.89,
        img:"./Images/good.jpeg",
        desc:`We believe good food brings happy customers.`,
    },
{
        id:12,
        title:"Foodies",
        price:16.89,
        category:"Dinner",
        img:"./Images/foode.jpg",
        desc:`Family dinner is our first priority here in LaCafe`,
    },
{
        id:13,
        title:"F & F",
        price:18.89,
        category:"Breakfast",
        img:"./Images/dessert2.jpg",
        desc:`Enjoy our breakfast dessert`,
    },
{
        id:14,
        title:"foodiee",
        price:20.89,
        category:"Lunch",
        img:"./Images/food6.jpg",
        desc:`Enjoy our special lunch with your friends,families and your better half!`,
    },
    {
        id:15,
        title:"drink",
        price:19.89,
        category:"Drinks",
        img:"./Images/wine4.jpg",
        desc:`Enjoy our drinks from our new bar.`,
    },
    {
        id:16,
        title:"Winery",
        price:21.89,
        category:"Drinks",
        img:"./Images/wine2.jpg",
        desc:`Enjoy our drinks from our new bar.`,
    },
    {
        id:17,
        title:"Winniey",
        price:16.89,
        category:"Drinks",
        img:"./Images/wine5.JPG",
        desc:`Enjoy our drinks from our new bar.`,
    },
    {
        id:17,
        title:"Enjoykie",
        price:18.89,
        category:"Drinks",
        img:"./Images/wine1.jpg",
        desc:`Enjoy our drinks from our new bar.`,
    },
];

const sectionCenter = document.querySelector('.section-center');
const container = document.querySelector('.btn-container')

// load items
window.addEventListener('DOMContentLoaded',function(){
    displayMenuItems(menu);
    
    displayMenuButtons();

});


function displayMenuItems(menuItems){
    let displayMenu = menuItems.map(function(item){
         
        return ` <article class="menu-item">
            <img src=${item.img} class="photo" alt=${item.title}>
            <div class="item-info">
                <header>
               <h4>${item.title}</h4>
                <h5 class="price">${item.price}</h5>
                </header>
                <p class="item-text">
                   ${item.desc}
                </p>
            </div>
        </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}
function displayMenuButtons(){
    const categories = menu.reduce(function(values,item){
        if(!values.includes(item.category)){
            values.push(item.category);
        }
       return values;
    },['all']);
    const categoryBtns = categories.map(function(category){
        return ` <button class="filter-btn" type="button" data-id=${category}>${category}</button>`
    }).join("");
container.innerHTML = categoryBtns;
const filterBtns = container.querySelectorAll('.filter-btn');

// filter items

filterBtns.forEach(function(btn){
    btn.addEventListener('click',function(e){
       const category = e.currentTarget.dataset.id;

       const menuCategory = menu.filter(function(menuItem){
           if (menuItem.category === category){
               return menuItem;
           }
           
       });
    //    console.log(menuCategory);
    if(category === 'all'){
        displayMenuItems(menu);
    }else{
        displayMenuItems(menuCategory);
    }
    });
});

}