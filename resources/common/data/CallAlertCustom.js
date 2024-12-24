import Swal from 'sweetalert2/dist/sweetalert2.min';  

 const CallAlertCustom=(icono,mensaje) =>{
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: icono,
      title:mensaje
    }); 
}
export default CallAlertCustom;
