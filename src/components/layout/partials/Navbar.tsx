import AuthDropDown from "@/components/elements/AuthDropDown";
import Icon from "@/components/elements/Icon";
import QuickCenter from "@/components/elements/QuickCenter";
import SearchBtn from "@/components/elements/SearchBtn";

export default function Navbar() {
  return (
    <div className="flex max-w-full items-center px-12 py-4 justify-between">
      <div className="inline-flex gap-10 items-center">
        <Icon />
        <QuickCenter />
      </div>
      <div className="inline-flex gap-x-3.5 items-center">
          <SearchBtn/>
        <AuthDropDown />
      </div>
    </div>
  );
}
