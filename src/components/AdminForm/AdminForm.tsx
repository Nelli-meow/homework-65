import * as React from 'react';
import Loader from '../UI/Loader.tsx';
import { useState } from 'react';
import { IPage } from '../../types';

const initialForm = {
  title: '',
  content: '',
  category: '',
};

const AdminForm = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [text, setText] = useState<IPage>({ ...initialForm });

  const categoryPages = [
    { title: 'Home', id: 'Home' },
    { title: 'About', id: 'About' },
    { title: 'Contacts', id: 'Contacts' },
    { title: 'Divisions', id: 'Divisions' },
  ];

  const onChangeField = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setText((prevText) => ({
      ...prevText,
      [name]: value,
    }));
  };

  const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (!text.title || !text.content) {
      alert("Don't leave fields blank");
    } else {
      console.log(text);
      setText({ ...initialForm });
    }
    setLoading(false);
  };

  return loading ? (
    <Loader />
  ) : (
    <div className="container mt-5">
      <h2>Edit pages</h2>
      <form onSubmit={submitForm}>
        <div className="my-3">
          <label htmlFor="Category">Select page</label>
          <select
            name="category"
            value={text.category}
            onChange={onChangeField}
            className="form-select form-select-sm"
            aria-label="Small select example"
          >
            <option value="" disabled>
              About
            </option>
            {categoryPages.map((category) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </select>
        </div>
        <div className="my-3">
          <label htmlFor="title">Title</label>
          <input
            name="title"
            value={text.title}
            onChange={onChangeField}
            className="form-control"
            aria-label="Small select example"
          />
        </div>
        <div className="my-3">
          <label htmlFor="content">Content</label>
          <textarea
            name="content"
            value={text.content}
            onChange={onChangeField}
            className="form-control"
            aria-label="Small select example"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-outline-info mt-2">
          Save
        </button>
      </form>
    </div>
  );
};

export default AdminForm;
