import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("docs", "routes/docs.tsx"),
  route("donate", "routes/donate.tsx"),
  route("contact", "routes/contact.tsx"),
  route("terms", "routes/terms.tsx"),
  route("privacy", "routes/privacy.tsx"),
  route("delete-account", "routes/delete-account.tsx"),
] satisfies RouteConfig;
