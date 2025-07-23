import { Extension } from 'argonite-core';
import { MainPopupEntry } from './MainPopupEntry';

Extension.create()
  .popup(MainPopupEntry)
  .run();
