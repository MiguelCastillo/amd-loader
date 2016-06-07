import Component from "../js/Component";

class UsageDropdown extends Component {
  render() {
    return this.content `
      <ul class="usage-dropdown">
        <li><a href="api">API</a></li>
        <li><a href="cli">CLI</a></li>
      </ul>
    `;
  }
}

export default UsageDropdown;
