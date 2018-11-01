<template>
    <div class="before-footer">
        <div class="container">
            <img class="over" src="../assets/6-fond3.png" >
            <img class="under" src="../assets/fond-line-blue.svg" >
        </div>
    </div>
</template>

<style scoped>
.under
{
    width: 300px;
    position:absolute;
    top: 0; 
    left: 50%;
    transform: translate(-20%,0);
    z-index:-1;
}
.over
{
    width: 450px;
    position:absolute;
    top: 130px; 
    left: 50%;
    transform: translate(-50%,0);
    z-index:1;

}
.container{
    position: relative;
    margin: 0 auto;
}
.before-footer{
    width: 100%;
    height: 500px;
}

</style>
