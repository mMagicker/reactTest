import React, { useState } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";

const SortableItem = SortableElement(
  ({
    data,
    onChecked,
  }: {
    data: itemProps;
    index: number;
    onChecked: (checked: boolean, index: number) => void;
  }) => {
    // 具有复选框的列表项
    const index = data.index;
    return (
      <li key={index}>
        <input
          type="checkbox"
          checked={data.checked}
          onChange={(e) => onChecked(e.target.checked, index)}
          key={index}
        />
        {data.label}
      </li>
    );
  }
);

const SortableList = SortableContainer(
  ({ items, onChecked }: { items: string[]; onChecked: () => void }) => {
    return (
      <ul>
        {items.map((item, index) => (
          <SortableItem
            key={`item-${index}`}
            index={index}
            data={{ ...item, index }}
            onChecked={onChecked}
          />
        ))}
      </ul>
    );
  }
);
type itemProps = {
  label: string;
  checked: boolean;
  index?: number;
};

export default function SortHocPage() {
  const [items, setItems] = useState<itemProps[]>([
    { label: "1", checked: false },
    { label: "2", checked: false },
    { label: "3", checked: false },
    { label: "4", checked: false },
  ]);

  const onSortEnd = ({ oldIndex, newIndex }: { oldIndex: number; newIndex: number }) => {
    console.log(oldIndex, newIndex)
    const newItems = [...items];
    newItems.splice(newIndex, 0, newItems.splice(oldIndex, 1)[0]);
    setItems(newItems);
  };
  const onChecked = (checked: boolean, index: number) => {
    console.log(checked, index);
    const newItems = [...items];
    newItems[index].checked = checked;
    setItems(newItems);
  };

  return (
    <>
      <SortableList items={items} onSortEnd={onSortEnd} onChecked={onChecked} />
    </>
  );
}
