import { useState } from "react";
import { useForm } from "react-hook-form";

interface ModalProps {
    modalType : 'add' | 'edit' | 'delete';
 //   onSave :
 //   onCancel :
}

interface bookmarkDataInterface {
    bookmarkTitle : string;
    bookmarkURL : string;
}

const ActionDetailModal = ({modalType} : ModalProps) => {

    const [fetchUrl, setFetchUrl] = useState('');
    
    const {register, handleSubmit, formState : {errors}} = useForm<bookmarkDataInterface>({
        defaultValues : {
            bookmarkTitle : '',
            bookmarkURL : '',
        }
    });

    const bookmarkUrlRegex = /^(https?):\/\/(-\.)?([^\s\/?\.#-]+\.?)+(\/[^\s]*)?$/i;


    const modalHandleFunc = () => {
        if(modalType === 'add' || modalType === 'edit'){
            //저장 로직
        }else if (modalType === 'delete'){
            //삭제로직
        }
    }

    const onValid = (data : bookmarkDataInterface) => {
        console.log(`bookmarkDataInterface`,data);
        //url 받아서 bookmarkDataFetch 에 담아 넘기기 : 현재 cors에러 발생
        //bookmarkDataFetch(data.bookmarkURL);
    }

    return(
    <div>
      <form onSubmit={handleSubmit(onValid)}
            style={{
                position: 'absolute', // 자식 모달의 위치를 설정
                top: '30%', 
                left: '110%',
                bottom: '30%',
                transform: 'translateX(0%)', // 자식 모달을 중앙에 위치시킵니다
            }} className="flex flex-col w-[311px] h-[220px] rounded-md border-[1px] border-black gap-2 justify-center">
        
        
        <div className="flex flex-col gap-2 items-center">
            <input type="text" 
                    className="w-[267px] h-[41px] rounded-md border-[1px] p-2" 
                    {...register('bookmarkTitle', {
                    required : "타이틀을 작성해주세요."
                    })}/>
                    
            <input type="text" 
                    id="bookmarkURL" 
                    placeholder="https://www.example.com"
                    value={fetchUrl} 
                    
                    className={`w-[267px] h-[41px] rounded-md border-[1px] ${errors.bookmarkURL?.message?"border-red-500":"border-slate-600"} p-2`} 
                    {...register('bookmarkURL', {
                    required : "URL을 입력해주세요",
                    pattern : { 
                        value : bookmarkUrlRegex,
                        message : "올바른 URL을 입력해주세요."
                    },onChange :(e) => {
                        setFetchUrl(e.target.value)
                    } 
                    })}/>
                    {errors.bookmarkURL?.message ? <span className="text-red-500">{errors.bookmarkURL?.message}</span> : null}
        </div>
        <div className="flex row-col gap-4 justify-center m-2">
            <button className="w-[58px] h-[34px] rounded-md border-[1px]">취소</button>
            <button className="w-[58px] h-[34px] rounded-md bg-slate-400">저장</button>
        </div>
    </form>

    </div>
        
    );
}

export default ActionDetailModal;