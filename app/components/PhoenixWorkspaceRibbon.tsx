import React from "react";
const workspaces = [
    {
      id: "executive",
      icon: "🦅",
      label: "Executive",
    },
  
    {
      id: "operations",
      icon: "🌍",
      label: "Operations",
    },
  
    {
      id: "analytics",
      icon: "📊",
      label: "Analytics",
    },
  
    {
      id: "data",
      icon: "📥",
      label: "Data",
    },
  
    {
      id: "administration",
      icon: "⚙",
      label: "Administration",
    },
  
    {
      id: "intelligence",
      icon: "🤖",
      label: "Intelligence",
    },
  ];
  
  type Props = {
    activeWorkspace: string;
  
    onWorkspaceChange: (
      workspace: string
    ) => void;

    children?: React.ReactNode;
    
  };
  
  export default function PhoenixWorkspaceRibbon({
    activeWorkspace,
    onWorkspaceChange,
  }: Props) {
    return (
      <nav
        className="flex flex-wrap items-center gap-3"
        aria-label="Phoenix Workspaces"
      >
        {workspaces.map((workspace) => {
          const active =
            workspace.id === activeWorkspace;
  
          return (
            <button
              key={workspace.id}
              type="button"
              onClick={() =>
                onWorkspaceChange(workspace.id)
              }
              className={`group rounded-lg px-4 py-3 transition-all duration-200 ${
                active
                  ? "bg-sky-50"
                  : "hover:bg-slate-50"
              }`}
            >
              <div className="flex items-center gap-2">
  
                <span className="text-lg">
                  {workspace.icon}
                </span>
  
                <span
                  className={`font-medium ${
                    active
                      ? "text-slate-900"
                      : "text-slate-600"
                  }`}
                >
                  {workspace.label}
                </span>
  
              </div>
  
              <div
                className={`mt-2 h-1 rounded-full transition-all duration-200 ${
                  active
                    ? "bg-green-500"
                    : "bg-transparent group-hover:bg-green-200"
                }`}
              />
  
            </button>
          );
        })}
      </nav>
    );
  }