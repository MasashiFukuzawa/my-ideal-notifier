# 概要
- 7つの習慣を読み策定したミッション・ステートメントを毎朝届けてくれるLINE bot
- Google Apps Script × TypeScript × Layered Architecture で実装

# 動作環境
- TypeScript: 3.8.3
- @google/clasp: 2.3.0
- jest: 26.4.0

# ディレクトリ構造
```
src
├── application
│   ├── ideal_push_application.ts
│   └── ideal_push_presentation_interface.ts
├── domain
│   ├── ideal.ts
│   ├── ideal_repository_interface.ts
│   └── value_object
│       ├── ideal_id.ts
│       ├── ideal_item.ts
│       └── ideal_push_flag.ts
├── infrastructure
│   └── ideal_repository.ts
├── presentation
│   ├── controller
│   │   └── ideal_push_controller.ts
│   ├── view
│   │   ├── authorization.ts
│   │   └── ideal_view.ts
│   ├── view_model
│   │   └── ideal_push_view_model.ts
│   ├── ideal_push_application_interface.ts
│   └── ideal_push_output_data.ts
└── user_interface
    └── google_apps_script_function.ts
```
