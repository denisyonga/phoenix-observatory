import PhoenixWorkspaceRibbon from "./PhoenixWorkspaceRibbon";
import React from "react";
type Props = {

    activeWorkspace: string;
    onWorkspaceChange: (
      workspace: string
    ) => void;
  
    children?: React.ReactNode;
  
  };
  
  export default function PhoenixOperationsCentreHeader({

    activeWorkspace,
    onWorkspaceChange,
    children,
  
  }: Props) {

    const workspaceInfo = {

        executive: {
          icon: "🦅",
          title: "Executive",
          description:
            "Strategic oversight for programme leadership.",
        },
      
        operations: {
          icon: "🌍",
          title: "Operations",
          description:
            "Coordinate programme activities across participating countries.",
        },
      
        analytics: {
          icon: "📊",
          title: "Analytics",
          description:
            "Transform operational data into executive insight.",
        },
      
        data: {
          icon: "📥",
          title: "Data",
          description:
            "Manage submissions, validation and publication workflows.",
        },
      
        administration: {
          icon: "⚙",
          title: "Administration",
          description:
            "Govern users, permissions and platform configuration.",
        },
      
        intelligence: {
          icon: "🤖",
          title: "Intelligence",
          description:
            "Generate AI-powered operational and executive intelligence.",
        },
      
      };
      
      const workspace =
        workspaceInfo[
          activeWorkspace as keyof typeof workspaceInfo
        ] ?? workspaceInfo.executive;

    return (

        <section className="rounded-2xl bg-white p-8 shadow-sm">

  <div>

    <h1 className="text-3xl font-bold text-slate-900">

      🏛 PHOENIX OPERATIONS CENTRE

    </h1>

    <p className="mt-2 text-lg text-slate-500">

      Executive Intelligence Platform
      for Programme Operations

    </p>

  </div>

  <div className="mt-8">

  <PhoenixWorkspaceRibbon

     activeWorkspace={activeWorkspace}

    onWorkspaceChange={onWorkspaceChange}

  />

</div>

  <div className="mt-8 rounded-xl bg-sky-50 p-6">

    <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">

      Current Workspace

    </p>

    <h2 className="mt-2 text-2xl font-bold">

      {workspace.icon} {workspace.title}

    </h2>

    <p className="mt-2 text-slate-600 leading-7">

      {workspace.description}

    </p>

  </div>

  {children}

</section>

    );

}