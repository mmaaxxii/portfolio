import { useSnackbar, ProviderContext , VariantType } from "notistack";

let useSnackbarRef: ProviderContext ;

export const SnackbarUtilitiesConfigurator: React.FC = ( ) => {
    useSnackbarRef = useSnackbar();
    return null;
}

export const SnackbarUtilities = {
    toast(msg: string, variant: VariantType = "default") {  
        useSnackbarRef.enqueueSnackbar(msg, {variant: variant});
    }, 

    success(msg: string)  {
        this.toast(msg, "success");
             
    },
    error(msg: string)  {
        this.toast(msg, "error");
              
    }, 
    info(msg: string)  {
        this.toast(msg, "info");
              
    },   
    warning(msg: string)  {
        this.toast(msg, "warning");
              
    }, 
}

