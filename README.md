# RL-Ai-Player

* This is a exporation projection for classical reinforcement learning.

* The Algorithm we will be implemented are [here](https://medium.com/@jonathan_hui/rl-reinforcement-learning-algorithms-quick-overview-6bf69736694d)

## GYM starting

- run `docker build -t  dl ./src/gym` it takes really long

- to run the jupyter notebook run `docker run --rm -it -v ABSOULTE_PATH_TO_SRC/src/gym/notebook/:/notebook -p 8888:8888 dl`

- visit `localhost:8888?token=THE_TOKENS_THAT_SHOWN_IN_TERMINAL`

## Testing MDD with flink with docker compose

### MapReduce Algorithm Steps

1. Map Function
   - Splitting
     - Splitting Step takes input DataSet from Source and divide into smaller Sub-DataSets.
   - Mapping
     - Mapping Step takes those smaller Sub-DataSets and perform required action or computation on each Sub-DataSet
   - This would finally pairs as `<Key,Value>` as output
   - Input: DataSets and Output `List of <Key,Value>`

2. Shuffle Function
   - Shuffling Function can explains as `combine function`
   - Merging combining all `Key-Value` pairs which have the same key and return `<Key, List<Value>>`.
   - Sorting based `Key` from aboved.

3. Reduce Function
   - Reduced Function Output generate `List of <Key,Value>`.