import {React ,useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';
function Announce() {
    const [announceStyle,setAnnonceStyle]=useState("bg-[#8a4af3] font-bold text-white flex items-center justify-center");
    const handleCLose=()=>{
        setAnnonceStyle(announceStyle+" hidden")
    }
  return (
    <div className={announceStyle}>
      <h2>Şimdi %40 indirim sizlerle.</h2>
      <CloseIcon className='cursor-pointer' onClick={handleCLose}/>
    </div>
  )
}

export default Announce
