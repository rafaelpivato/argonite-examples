import { PopupEntry } from 'argonite-core';

export class MainPopupEntry extends PopupEntry {
  mount(root: HTMLElement) {
    root.innerHTML = `
      <div style="font-family: sans-serif; padding: 1em; min-width: 200px;">
        <h2>Argonite Popup</h2>
        <p>This is a dummy popup example using <b>Argonite Core</b>.</p>
        <ul>
          <li>Feature: Dummy Info</li>
          <li>Status: <span style="color: green;">Working</span></li>
        </ul>
      </div>
    `;
  }
}
