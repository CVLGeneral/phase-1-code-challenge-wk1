function marksScore() {

   const marks=parseInt(document.getElementById("mks").value);



if (marks >= 0 && marks <= 100) {

    if (marks>79&& marks<=100){
        document.getElementById("grade").innerHTML="You Got A Grade";
    }else if(marks>59 && marks<=79){
        document.getElementById("grade").innerHTML="You Got B Grade";
    }else if(marks>49 && marks <=59) {
        document.getElementById("grade").innerHTML="You Got C Grade";
    } else if (marks>39 && marks<=49){
        document.getElementById("grade").innerHTML="You Got D Grade";
    }else {
        document.getElementById("grade").innerHTML="You Got E Grade";
    }

} else{
    document.getElementById("grade").innerHTML="Please Enter Marks in range of 0-100";

}

}
