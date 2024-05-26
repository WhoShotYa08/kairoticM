import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import FileUploadScreen from '../frontend/src/screens/FileUpload';

const DndProviderWrapper = () => {
  
    return (
      <DndProvider backend={HTML5Backend}>
        <FileUploadScreen/>
      </DndProvider>
    );
  };

  export default DndProviderWrapper;