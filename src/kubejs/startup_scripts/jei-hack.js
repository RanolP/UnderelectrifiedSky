let IS_PRODUCTION = false;

if (IS_PRODUCTION) {
  const Java$Class = MAIN_HAND.getClass().getClass();

  const Java$Context = Java$Class.forName('dev.latvian.mods.rhino.Context');
  const Java$Scriptable = Java$Class.forName(
    'dev.latvian.mods.rhino.Scriptable'
  );
  const Java$NativeJavaClass = Java$Class.forName(
    'dev.latvian.mods.rhino.NativeJavaClass'
  );

  const Java$Context_getCurrentContext =
    Java$Context.getMethod('getCurrentContext');
  const Java$Context_enter = Java$Context.getMethod('enter');
  const Java$Context_exit = Java$Context.getMethod('exit');
  function enterContext() {
    Java$Context_enter.invoke(null, []);
  }
  function uninstallWrapperTypes() {
    const Java$context = Java$Context_getCurrentContext.invoke(null, []);
    if (Java$context === null) {
      return;
    }
    const Java$factory = Java$Context.getMethod('getFactory').invoke(
      Java$context,
      []
    );
    const Java$ContextFactory_typeWrappersField =
      Java$factory.getClass().getDeclaredField('typeWrappers');
    Java$ContextFactory_typeWrappersField.setAccessible(true);
    Java$ContextFactory_typeWrappersField.get(Java$factory).removeAll();
  }
  function exitContext() {
    const Java$context = Java$Context_getCurrentContext.invoke(null, []);
    if (Java$context !== null) {
      Java$Context_exit.invoke(null, []);
      uninstallWrapperTypes();
    }
  }

  function javaUnjailed(name) {
    const Java$context = Java$Context_getCurrentContext.invoke(null, []);
    const Java$scope = Java$context.initStandardObjects();

    const clazz = Java$NativeJavaClass.getConstructor(
      Java$Scriptable,
      Java$Class
    ).newInstance(Java$scope, Java$Class.forName(name));

    return clazz;
  }

  const Timer = javaUnjailed('java.util.Timer');
  const TimerTask = javaUnjailed('java.util.TimerTask');

  function setExternalTimeout(callback, timeout) {
    const timer = new Timer();
    const task = new JavaAdapter(TimerTask, {
      run: callback,
    });
    timer.schedule(task, timeout);
  }

  const ModList = javaUnjailed('net.minecraftforge.fml.ModList');
  const ModContainer = javaUnjailed('net.minecraftforge.fml.ModContainer');
  const IModInfo = javaUnjailed(
    'net.minecraftforge.forgespi.language.IModInfo'
  );
  const Thread = javaUnjailed('java.lang.Thread');

  const Java$ModInfo = Java$Class.forName(
    'net.minecraftforge.fml.loading.moddiscovery.ModInfo'
  );
  const defaultVersionField = Java$ModInfo.getDeclaredField('DEFAULT_VERSION');
  defaultVersionField.setAccessible(true);
  const DEFAULT_VERSION = defaultVersionField.get(null);

  const ourMod = {};

  const ourModInfo = new JavaAdapter(IModInfo, {
    getOwningFile() {
      return null; // IModFileInfo
    },

    getModId() {
      return 'underelectrifiedsky';
    },

    getDisplayName() {
      enterContext();
      setExternalTimeout(exitContext, 0);
      return 'Underelectrified Sky';
    },

    getDescription() {
      return '';
    },

    getVersion() {
      enterContext();
      setExternalTimeout(exitContext, 0);
      return DEFAULT_VERSION;
    },

    getDependencies() {
      return []; // List<? extends ModVersion>
    },

    getNamespace() {
      return null; // String
    },

    getModProperties() {
      return {}; // Map<String,Object>
    },

    getUpdateURL() {
      return null; // Optional<URL>
    },

    getLogoFile() {
      return null; // Optional<String>
    },

    getLogoBlur() {
      return false;
    },

    getConfig() {
      return null; // IConfigurable
    },
  });

  const ourModContainer = new JavaAdapter(
    ModContainer,
    {
      getMod() {
        return ourMod;
      },
      matches(mod) {
        return mod === ourMod;
      },
    },
    ourModInfo
  );

  ourModContainer.contextExtension = () => 'common';

  const modList = ModList.get();

  const modsField = modList.getClass().getDeclaredField('mods');
  modsField.setAccessible(true);

  const indexedModsField = modList.getClass().getDeclaredField('indexedMods');
  indexedModsField.setAccessible(true);

  const mods = modsField.get(modList);
  const indexedMods = indexedModsField.get(modList);

  mods.add(ourModContainer);
  indexedMods.put(ourModContainer.getModId(), ourModContainer);

  uninstallWrapperTypes();
}
