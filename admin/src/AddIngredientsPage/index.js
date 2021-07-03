import React from 'react';
import { useForm } from 'react-hook-form';

export default function AddIngredientsPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(111, data);
    const formData = new FormData();
    formData.append(
      'files',
      data.ingredientImage[0],
      data.ingredientImage[0].name
    );

    console.log(222, formData);

    const res = await fetch(
      'https://papaginos-server.herokuapp.com/v2/ingredients',
      {
        method: 'POST',
        body: formData,
      }
    ).then((res) => res.json());
    alert(JSON.stringify(res));
  };

  //console.log(watch('example')); // watch input value by passing the name of it

  return (
    <>
      <h1>Add your ingredients here</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">
            <input {...register('ingredientName')} type="text" />
            Enter name of the ingredient
          </label>
        </div>
        <div>
          <label htmlFor="">
            <input {...register('ingredientSlug')} type="text" />
            Enter slug of the ingredient
          </label>
        </div>
        <div>
          <label htmlFor="">
            <input {...register('ingredientPrice')} type="text" />
            Enter price of the ingredient
          </label>
        </div>
        <div>
          <label htmlFor="">
            <input {...register('ingredientImage')} type="file" />
            Upload image of the ingredient
          </label>
        </div>

        <div>
          <label htmlFor="">
            <input {...register('ingredientThumbnail')} type="file" />
            Upload thunbnail of the ingredient
          </label>
        </div>

        <input type="submit" />
      </form>
    </>
  );
}
