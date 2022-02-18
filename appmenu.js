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
        category:"breakfast",
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
        price:19.89,
        category:"Lunch",
        img:"./Images/food6.jpg",
        desc:`Enjoy our special lunch with your friends,families and your better half!`,
    },
];

const sectionCenter = document.querySelector('.section-center');

window.addEventListener('DOMContentLoaded',function(){
    displayMenuItems(menu);
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