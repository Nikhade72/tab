import React, { useState } from 'react';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabClickHandler = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div>
        <button
          onClick={() => tabClickHandler(0)}
          className={activeTab === 0 ? 'active-tab' : ''}
        >
          HTML
        </button>
        <button
          onClick={() => tabClickHandler(1)}
          className={activeTab === 1 ? 'active-tab' : ''}
        >
          CSS
        </button>
        <button
          onClick={() => tabClickHandler(2)}
          className={activeTab === 2 ? 'active-tab' : ''}
        >
          JavaScript
        </button>
      </div>
      <div>
        <p style={{ display: activeTab === 0 ? 'block' : 'none' }}>
          The HyperText Markup Language or HTML is the
          standard markup language for documents designed to
          be displayed in a web browser.
        </p>
        <p style={{ display: activeTab === 1 ? 'block' : 'none' }}>
          Cascading Style Sheets is a style sheet language
          used for describing the presentation of a document
          written in a markup language such as HTML or XML.
        </p>
        <p style={{ display: activeTab === 2 ? 'block' : 'none' }}>
          JavaScript, often abbreviated as JS, is a
          programming language that is one of the core
          technologies of the World Wide Web, alongside HTML
          and CSS.
        </p>
      </div>
      <style jsx>{`
        div {
          margin: 20px;
        }

        button {
          margin-right: 10px;
          padding: 5px 10px;
          cursor: pointer;
        }

        .active-tab {
          color: blue;
        }
      `}</style>
    </div>
  );
}
