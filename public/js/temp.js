
var Authentication = new Vue({
    el: '#authentication',
    data: {
        // state === true : 로그인
        // state === false : 회원가입
        state: true
    },
    methods: {
        wantRegister : function() {
            document.getElementById('card-form').style.animationName="card-move2";
            // document.getElementById('card-form').style.animationFillMode= forwards;
            this.state = false;
        },
        wantLogin : function() {
            document.getElementById('card-form').style.animationName="card-move1";
            // document.getElementById('card-form').style.animationFillMode= forwards;
            this.state = true;
        }
    }
})