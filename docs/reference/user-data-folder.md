# User Data Folder

Supervertaler Workbench stores your translation memories, termbases, prompts, and settings in a single user data folder. If you also use [Supervertaler for Trados](https://supervertaler.gitbook.io/trados), both programs share this folder – so resources you create in one are immediately available in the other.

## Folder location

By default, the data folder is located at:

```
C:\Users\<YourName>\Supervertaler\
```

You can view or change the location in **Settings > General > Data Folder Location**. Click **Open** to open the folder in your file manager, or **Change...** to move it to a different location (existing data can be copied automatically).

Both Supervertaler Workbench and Supervertaler for Trados read the configured path from the same pointer file at `%APPDATA%\Supervertaler\config.json`.

## The database

All translation memories and termbases are stored in a single SQLite database file:

```
Supervertaler/resources/supervertaler.db
```

The filename is always `supervertaler.db` – it is not configurable. Both TMs and termbases live in separate tables within this one file. If you use Supervertaler for Trados alongside Workbench, the Trados plugin reads from the same database (read-only).

The database uses SQLite WAL (Write-Ahead Logging) mode, so you may also see `supervertaler.db-wal` and `supervertaler.db-shm` files alongside it. These are normal and are cleaned up automatically.

## Folder structure

```
Supervertaler/
│
├── prompt_library/              Shared
│   ├── domain_expertise/
│   ├── project_prompts/
│   └── style_guides/
│
├── resources/                   Shared
│   ├── supervertaler.db
│   ├── termbases/
│   ├── tms/
│   ├── non_translatables/
│   └── segmentation_rules/
│
├── workbench/                   Supervertaler Workbench only
│   ├── settings/
│   │   ├── settings.json
│   │   ├── themes.json
│   │   ├── shortcuts.json
│   │   └── ...
│   ├── dictionaries/
│   ├── projects/
│   ├── ai_assistant/
│   ├── voice_scripts/
│   └── web_cache/
│
└── trados/                      Supervertaler for Trados only
    ├── settings/
    │   ├── settings.json
    │   ├── license.json
    │   └── chat_history.json
    └── projects/
```

### Shared resources

The **prompt library** and **resources** folders are shared between both programs. Prompts you create or edit in one program are immediately available in the other. The SQLite database (`supervertaler.db`) holds your termbases and translation memories – Workbench has full read-write access, while the Trados plugin reads from it.

### Program-specific folders

Each program stores its own settings, projects, and runtime data in a dedicated subfolder (`workbench/` or `trados/`). This keeps configuration separate so the two programs never interfere with each other.

## Backing up your data

The `supervertaler.db` file contains all your termbases and translation memories. Back up this file regularly – you can find it in the `resources/` subfolder of your data folder.

You can also export your data in standard formats for safekeeping:

- **Translation memories** – export to TMX via the TM manager
- **Termbases** – export to CSV or TBX via the glossary manager

Supervertaler Workbench also has an [auto-backup feature](../settings/general.md) that saves your project and TMX files at regular intervals.

## Automatic migration

If you are updating from an older version, Supervertaler will automatically reorganise the data folder on startup. No manual action is required – your settings and data are preserved.
