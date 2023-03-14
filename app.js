var app = new Vue({
  el: '#app',
  data:{
      titulo: 'QR Code',
      name: '',  
      qrcode: new QRious({ size:300})
  },
  computed:{
      newQrcode(){
          this.qrcode.value = this.name
                   
          return this.qrcode.toDataURL()
      }
  },
  methods:{
      onDataA(event){
          this.name = event.target.value          
    
      }
  } 
})