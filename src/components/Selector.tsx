import React from 'react';

interface SelectorProps {
    item: { id: number; name: string };
    selected: number;
    onSelect: (id: number) => void;
}

const Selector: React.FC<SelectorProps> = ({ item, selected, onSelect }) => {
    const isSelected = selected === item.id;
    const style = isSelected
        ? "m-1 flex-1 rounded-lg text-center content-center text-rose-500 bg-white"
        : "m-1 flex-1 rounded-lg text-center content-center";

    return (
        <div
            className={style}
            onClick={() => onSelect(item.id)}
        >
            {item.name}
        </div>
    );
};

export default Selector;
