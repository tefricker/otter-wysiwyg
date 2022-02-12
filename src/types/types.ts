interface OtterWYSIWYGOptions {
  theme: "light" | "dark";
}

interface otter {
  pages: page[];
}

interface otterComponent {
  type: string;
  content?: string;
  path?: string;
  justify: "center" | "left" | "right";
  custom?: Record<any, any>;
  style?: Record<any, any>;
  bgColor: string;
  color: string;
}

interface page {
  name: string;
  otterComponent: otterComponent[];
}

type OCtype = "text" | "textarea" | "custom";
