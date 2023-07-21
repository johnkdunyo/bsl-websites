import SiteLayout from "../../components/Layout/SiteLayout";
import CustomBackground1 from "../../components/animations/CustomBackground1";
import Image from "next/image";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { BoardMembersData } from "shared-components";

type Params = {
  memberID: string;
};

const MemberDetail = ({ memberID }: Params) => {
  const router = useRouter();

  const parsedMemberID = parseInt(memberID, 10);
  const boardmember = BoardMembersData.find(
    (member) => member.id === parsedMemberID
  );

  useEffect(() => {
    if (!boardmember) {
      router.push("/about");
    }
  });

  return (
    <SiteLayout pageName={"About"}>
      <div className="py-36 sm:py-48 relative">
        <CustomBackground1 />
        <div className="custom-container z-10">
          <div className="flex flex-col sm:flex-row gap-10 mx-3 sm:mx-28">
            <div className="w-full sm:w-[40%] flex flex-col items-end">
              <Image
                src={boardmember?.imgURL!}
                blurDataURL={boardmember?.imgURL!}
                alt={`${boardmember?.name}'s picture`}
                width={928}
                height={1024}
                className=""
              />
            </div>

            <div className="flex flex-col gap-4 w-full sm:w-[60%] sm:mt-4">
              <h1
                className="font-medium text-2xl"
                dangerouslySetInnerHTML={{ __html: boardmember?.name! }}
              />

              <h2 className="text-[#AB2346] font-medium text-4xl">
                {boardmember?.portfolio}
              </h2>

              <p
                className="paragraphText1 mt-2 z-20"
                dangerouslySetInnerHTML={{ __html: boardmember?.description! }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </SiteLayout>
  );
};

export async function getServerSideProps({
  params,
}: {
  params: { memberID: string };
}) {
  const { memberID } = params;
  return {
    props: {
      memberID,
    },
  };
}

export default MemberDetail;
