import React, {useState, createContext} from 'react'

export const StateConsumer = createContext<any[] | []>([])

export const StateProvider = (props: any): any => {
    const [selectedItem, setSelectedItem] = useState([])
    return (
        <StateConsumer.Provider value={[selectedItem, setSelectedItem]} >
        {props.children}
        </StateConsumer.Provider>
    )
}