const PrimaryButton = (props: any) => {
  return (
    <button className="bg-[#3685FB] text-white text-[13px] font-[600] py-2 px-6 rounded-md border-[1px] border-[#3685FB] hover:bg-[#0c64ea] active:bg-[#337eee] transition-all">
      {props.children}
    </button>
  );
};

export default PrimaryButton;
