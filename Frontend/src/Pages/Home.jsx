import React, { useState } from 'react';

const Home = () => {
  const [text, setText] = useState('');
  const [fromLanguage, setFromLanguage] = useState('en');
  const [toLanguage, setToLanguage] = useState('es'); 
  const [translatedText, setTranslatedText] = useState('');

  const handleTranslate = async () => {
    try {
      const response = await fetch(`https://api.mymemory.translated.net/get?q=${text}&langpair=${fromLanguage}|${toLanguage}`);
      const data = await response.json();
      setTranslatedText(data.responseData.translatedText);
    } catch (error) {
      console.error('Error during translation:', error);
    }
  };

  return (
    <>
      <nav className="bg-gradient-to-r from-purple-800 to-indigo-600 p-4 shadow-lg">
        <div className="container mx-auto flex justify-center">
          <h1 className="text-white text-3xl font-bold">TransLingo</h1>
        </div>
      </nav>

      <div className="container mx-auto p-8 max-w-xl">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Text Translator</h2>
        <textarea
          rows="4"
          className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter text to translate..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        
        <div className="flex justify-between mb-4 mt-4">
          <select
            value={fromLanguage}
            onChange={(e) => setFromLanguage(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg w-1/2 mr-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          
          </select>
          <select
            value={toLanguage}
            onChange={(e) => setToLanguage(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg w-1/2 ml-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="es">Spanish</option>
            <option value="en">English</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          
          </select>
        </div>
        
        <button
          onClick={handleTranslate}
          className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-6 py-2 rounded-lg w-full mt-4 hover:from-purple-700 hover:to-indigo-600 transition duration-200"
        >
          Translate
        </button>

        {translatedText && (
          <div className="mt-6 p-4 border border-gray-300 rounded-lg bg-gray-100 shadow-md">
            <h3 className="text-lg font-bold text-gray-800">Translated Text:</h3>
            <p className="text-gray-800">{translatedText}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
