const home=homeTemp
const app=new Vue({el:'#app',
    components:{home},
    data(){
        return{
            showKefu:false,
            showPhoneNav:false,
            showDownloadModal:false,
            androidUrl: 'http://alv827x.tplgin.com/JUYING_AI.apk',
            iosUrl: 'https://allenchenkm.github.io/Ai/'
        }
    },
    methods: {
        openDownloadModal() {
            console.log('打开下载弹窗');
            this.showDownloadModal = true;
            // 不再需要生成二维码，直接使用图片
        }
    },
    mounted() {
        // 将Vue实例挂载到全局，供goLink函数调用
        window.app = this;
        console.log('Vue应用已初始化，showDownloadModal:', this.showDownloadModal);
    }
})
//jQuery
$(function(){
    $(document).click(function(){$('.vant-pop1').hide()})
    $('.newMore').click(function(event){
        event.stopPropagation()
        const popLeft=$(this).offset().left
        $('.vant-pop1').css({'left':popLeft}).show()
    })
    $('.linkA').click(function(){
        $('.linkA').removeClass('bg-$primary')
        if(!$(this).hasClass('none')){$(this).addClass('bg-$primary')}
        const domDiv=$(this).attr('data-href')
        $('html, body').animate({
            scrollTop:$('#'+domDiv).offset().top
        }, 300)
    })
    $('.accordion-item .w-full').click(function(){
        $(this).find('.h-auto').is(':hidden')?$(this).find('.h-auto').show():$(this).find('.h-auto').hide()
    })
})