import EditMenu from '../components/EditMenu';
import Color from '../components/Color';
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import React , { useState } from 'react'

const initialColor = {
  color: "",
  code: { hex: "" }
};
const ColorList = ({ colors, updateColors }) => {
  const [editing, setEditing] = useState(false);
  const [editColor, setEditColor] = useState(initialColor);
  const colorEdited = color => {
    setEditing(true);
    setEditColor(color);
  };

  const saveEdit = e => {
    e.preventDefault();

    axiosWithAuth()
    .put(`api/colors/${editColor.id}`, editColor)
    .then((res) => {
      updateColors(
        colors.map((color) => {
          if (color.id === res.data.id) {
            return res.data;
          } else {
            return color
          }
        })
      )
    })
    .catch((error) => {
      console.log(error, 'houston we have a problem')
    })
  };

  const deleteColor = color => {
    axiosWithAuth()
    .delete(`api/colors/${color.id}`)
    .then((res) => {
      updateColors(colors.filter((col) => col.id !== Number(res.data)))
    })
    .catch((error) => {
      console.log(error)
    })
  };

  return (
    <div className="colors-wrap">
      <p>colors</p>
      <ul>
        {colors.map(color => <Color key={color.id} editing={colorEdited} color={color} editColor={editColor} deleteColor={deleteColor}/>)}
      </ul>
      
      { editing && <EditMenu colorToEdit={editColor} saveEdit={saveEdit} setColorToEdit={editColor} setEditing={setEditing}/> }
    </div>
  );
};
export default ColorList;