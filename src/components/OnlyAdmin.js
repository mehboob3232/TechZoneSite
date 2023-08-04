import React, {useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function OnlyAdminAuth(props) {
    const navigator = useNavigate();
    const UserContext = useContext(AuthContext);

    useEffect(() => {
        if(UserContext.user?.role != "admin"){
            navigator("/login",{replace:true});
        }
    },[]);
    return (
        <>{props.children}</>
    )
}
export default OnlyAdminAuth