document.querySelector("#sidebar_result_item1").addEventListener ("click", () => {
    document.querySelector("#sidebar_result_item1").style.backgroundColor="rgb(1, 126, 42)";
    document.querySelector("#sidebar_result_item1").style.color="rgb(32, 32, 32)";

    document.querySelector("#sidebar_result_item2").style.backgroundColor="rgb(16, 35, 121)";
    document.querySelector("#sidebar_result_item2").style.color="rgb(255, 255, 255)";

    document.querySelector("#sidebar_result_item3").style.backgroundColor="rgb(16, 35, 121)";
    document.querySelector("#sidebar_result_item3").style.color="rgb(255, 255, 255)";

    document.querySelector("#sidebar_result_item4").style.backgroundColor="rgb(16, 35, 121)";
    document.querySelector("#sidebar_result_item4").style.color="rgb(255, 255, 255)";

    document.querySelector("#main_result1").style.display="flex";
    document.querySelector("#main_result2").style.display="none";
    document.querySelector("#main_result3").style.display="none";
    document.querySelector("#main_result4").style.display="none";
})

document.querySelector("#sidebar_result_item2").addEventListener ("click", () => {
    document.querySelector("#sidebar_result_item2").style.backgroundColor="rgb(1, 126, 42)";
    document.querySelector("#sidebar_result_item2").style.color="rgb(32, 32, 32)";

    document.querySelector("#sidebar_result_item1").style.backgroundColor="rgb(16, 35, 121)";
    document.querySelector("#sidebar_result_item1").style.color="rgb(255, 255, 255)";

    document.querySelector("#sidebar_result_item3").style.backgroundColor="rgb(16, 35, 121)";
    document.querySelector("#sidebar_result_item3").style.color="rgb(255, 255, 255)";

    document.querySelector("#sidebar_result_item4").style.backgroundColor="rgb(16, 35, 121)";
    document.querySelector("#sidebar_result_item4").style.color="rgb(255, 255, 255)";

    document.querySelector("#main_result2").style.display="flex";
    document.querySelector("#main_result1").style.display="none";
    document.querySelector("#main_result3").style.display="none";
    document.querySelector("#main_result4").style.display="none";
})

document.querySelector("#sidebar_result_item3").addEventListener ("click", () => {
    document.querySelector("#sidebar_result_item3").style.backgroundColor="rgb(1, 126, 42)";
    document.querySelector("#sidebar_result_item3").style.color="rgb(32, 32, 32)";

    document.querySelector("#sidebar_result_item1").style.backgroundColor="rgb(16, 35, 121)";
    document.querySelector("#sidebar_result_item1").style.color="rgb(255, 255, 255)";

    document.querySelector("#sidebar_result_item2").style.backgroundColor="rgb(16, 35, 121)";
    document.querySelector("#sidebar_result_item2").style.color="rgb(255, 255, 255)";

    document.querySelector("#sidebar_result_item4").style.backgroundColor="rgb(16, 35, 121)";
    document.querySelector("#sidebar_result_item4").style.color="rgb(255, 255, 255)";

    document.querySelector("#main_result3").style.display="flex";
    document.querySelector("#main_result1").style.display="none";
    document.querySelector("#main_result2").style.display="none";
    document.querySelector("#main_result4").style.display="none";
})

document.querySelector("#sidebar_result_item4").addEventListener ("click", () => {
    document.querySelector("#sidebar_result_item4").style.backgroundColor="rgb(1, 126, 42)";
    document.querySelector("#sidebar_result_item4").style.color="rgb(32, 32, 32)";

    document.querySelector("#sidebar_result_item1").style.backgroundColor="rgb(16, 35, 121)";
    document.querySelector("#sidebar_result_item1").style.color="rgb(255, 255, 255)";

    document.querySelector("#sidebar_result_item3").style.backgroundColor="rgb(16, 35, 121)";
    document.querySelector("#sidebar_result_item3").style.color="rgb(255, 255, 255)";

    document.querySelector("#sidebar_result_item2").style.backgroundColor="rgb(16, 35, 121)";
    document.querySelector("#sidebar_result_item2").style.color="rgb(255, 255, 255)";

    document.querySelector("#main_result4").style.display="flex";
    document.querySelector("#main_result1").style.display="none";
    document.querySelector("#main_result3").style.display="none";
    document.querySelector("#main_result2").style.display="none";
})