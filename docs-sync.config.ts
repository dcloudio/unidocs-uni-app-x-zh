import { defineConfig } from 'docs-sync-cli';

const isDev = process.env.NODE_ENV === 'development';

interface FileMapping {
  from: string;
  to: string;
}

function createSyncMapping(files: (string | FileMapping)[]) {
  return files.map(file => {
    if (typeof file === 'string') {
      return {
        from: `common:${file}`,
        to: `docs/${file}`,
      }
    } else {
      return {
        from: `common:${file.from}`,
        to: `docs/${file.to}`,
      }
    }
  });
}

export default defineConfig({
  site: 'unidocs-uni-app-x-zh',

  cacheDir: '.docs-sync-cache',

  sources: {
    common: {
      repo: isDev ? '/Users/lxh/DCloud/git_projects/docs-common' : 'https://gitcode.com/dcloud/docs-common.git',
      branch: 'main',
    }
  },

  mappings: [
    // ai
    ...createSyncMapping([
      'ai/_sidebar.md',
      'ai/auto-test.md',
      'ai/github-copilot.md',
      'ai/README.md',
      'ai/hbuilderx-ai-chat.md',
      'ai/uni-agent.md',
      'ai/vibe-partner.md',
      'ai/use-ui-mcp.md',
      'ai/personal-subscription.md',
      'ai/enterprise-subscription.md',

    ]),
    // worktile
    ...createSyncMapping([
      'worktile/_sidebar.md',
      'worktile/git-svn.md',
      'worktile/README.md',
      'worktile/running-env.md',
      'worktile/auto/api.md',
      'worktile/auto/hbuilderx-cli-uniapp-test.md',
      'worktile/auto/quick-start.md',
      'worktile/auto/uniapp-cli-project.md',
      'worktile/auto/hbuilderx-extension/index.md',
    ]),
    // plugin
    ...createSyncMapping([
      'plugin/_sidebar.md',
      'plugin/README.md',
      'plugin/language.md',
      'plugin/native-covert-uts.md',
      'plugin/oath.md',
      'plugin/plugin-ext-introduction.md',
      'plugin/publish.md',
      'plugin/sell.md',
      'plugin/uni_modules.md',
      'plugin/uts-component-compatible.md',
      'plugin/uts-component-vue.md',
      'plugin/uts-component.md',
      'plugin/uts-for-android.md',
      'plugin/uts-for-harmony.md',
      'plugin/uts-for-ios.md',
      'plugin/uts-ios-cocoapods.md',
      'plugin/uts-ios-spms.md',
      'plugin/uts-plugin-hybrid.md',
      'plugin/uts-plugin.md',
      'plugin/uts-uni-api.md',
      'plugin/faq/faq.md'
    ]),
    // tutorial
    ...createSyncMapping([
      {
        from: 'tutorial/err-spec.md',
        to: 'err-spec.md',
      }
    ]),
    // tutorial
    ...createSyncMapping([
      {
        from: 'tutorial/platform.md',
        to: 'compiler/platform.md',
      },
      {
        from: 'tutorial/env.md',
        to: 'compiler/env.md',
      },
      {
        from: 'tutorial/page-static-assets.md',
        to: 'compiler/page-static-assets.md',
      },
      'tutorial/CORS.md',
      'tutorial/adapt.md',
      {
        from: 'tutorial/run/run-app.md',
        to: 'tutorial/run-app.md',
      },
      {
        from: 'tutorial/run/uts-development-android.md',
        to: 'tutorial/uts-development-android.md',
      },
      {
        from: 'tutorial/debug/uni-uts-debug.md',
        to: 'tutorial/uni-uts-debug.md',
      },
      {
        from: 'tutorial/run/uts-development-ios.md',
        to: 'tutorial/uts-development-ios.md',
      },
      {
        from: 'tutorial/debug/uni-uts-debug-ios.md',
        to: 'tutorial/uni-uts-debug-ios.md',
      },
      {
        from: 'tutorial/harmony/runbuild.md',
        to: 'tutorial/runbuild.md',
      },
      {
        from: 'tutorial/debug/uni-uts-debug-harmony.md',
        to: 'tutorial/uni-uts-debug-harmony.md',
      },
      {
        from: 'tutorial/app-nativeresource-android.md',
        to: 'collocation/app-nativeresource-android.md',
      }
    ])
  ],
});
