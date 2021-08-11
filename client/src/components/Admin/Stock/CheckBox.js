
import React from ("react");

export const CheckBox=React.forwadRef(({indeterminate,...rest},ref)=>{
    const defaultRef=React.useRef()
    const resolveRef=ref||defaultRef

    React.useEffect(()=>{
        resolveRef.current.ideterminate=indeterminate
    },[resolveRef,indeterminate])
})

return (
    <>
        <input type="checkbox" ref={resolvedRef} {...rest} />
    </>
)