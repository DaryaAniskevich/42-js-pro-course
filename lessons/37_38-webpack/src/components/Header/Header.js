import { createComponent } from "../../utils/components";
import logoUrl from "./logo.png";
import "./Header.css";

const Header = () =>
  createComponent(`
  <header class="header">
    <img src="${logoUrl}" width="200" alt="" />
    <a href="/index.html">Home</a>
    <a href="/contacts.html">Contacts</a>
  </header>
`);

export default Header;
