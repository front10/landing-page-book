const navBarCode = `
class App extends Component {
    render() {
        return (
            <Hero
                backgroundColor="#212529"
                header="Front10"
                minHeight="400px"
                subHeader="Rewriting the world with React"
                image="images/hero/map-image.png"
              />
        );
    }
}
  `;

const importThemes = `
import "@front10/landing-page-book/dist/themes/default/style.css";
import { Hero } from "@front10/landing-page-book/dist/components";
`;

const customCss = `
:root{
    --Button-borderRadius: 5px;
    --Button-fontSize: 16px;
    --Button-padding: 6px 12px;
}
`;

const customizedButton = `
import "bootstrap/dist/css/bootstrap.min.css";
import "@front10/landing-page-book/dist/dist/components/Button/style.css";
import "./custom-theme.css";
import { Button } from "@front10/landing-page-book/dist/components";

class MyComponent extends Component {
  render() {
    return <Button>Explore</Button>;
  }
}
`;

export { navBarCode, importThemes, customCss, customizedButton };
