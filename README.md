### useIsFocused

```tsx
可以用来判断当前页面是否进入, 通过这个可以实现每次进来的时候都重新调一遍接口
	const focuse = useIsFocused()
  useEffect(() => {
    const unsubscribe = navigation.addListener("foucus", () => {
      console.log("focus");
    });
    return unsubscribe;
  }, [navigation]);
  

  useEffect(() => {
    if (!focuse) return
    console.log('请求数据...');
  }, [focuse])
```

### useNavigationState

```tsx
可以用来获取路由的信息，包括当前的路由栈信息，路由栈的下标，等
const state = useNavigationState((state) => state)
```

### useFocusEffect

```tsx
当页面进入时会执行，相比 useIsFocused, useFocusEffect相当于 useIsFocused + useEffect
useFocusEffect(useCallback(() => {
    console.log('useFocusEffect...');
}, []))
```

### beforeRemove 监听离开该界面事件，好像不能通过条件放行还是阻止

```tsx
const beforeRemove = navigation.addListener("beforeRemove", (e: any) => {
    e.preventDefault() // 阻止默认离开当前页面 
    console.log("beforeRemove...", e);
 });
```

### listeners  / screenListeners 直接在路由中配置监听（可写成函数形式）

```tsx
可以直接在路由配置中 或者 路由容器中 进行页面的事件监听，而不用在具体的页面逻辑中

// 具体页面
<Stack.Screen
  liståeners={({ navigation, route }) => ({
      // 进入该页面时候触发
      focus: (e) => {
        navigation.navigate("AnotherPlace");
      },
  })}
 />

// 整个容器
<Stack.Navigator
  screenListeners={{
    state: (e) => {
      // Do something with the state
      console.log('state changed', e.data);
    },
  }}
>
  <Stack.Screen name="Home" component={HomeScreen} />
  <Stack.Screen name="Profile" component={ProfileScreen} />
</Stack.Navigator>
```

