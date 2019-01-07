import numpy as np

class Random_Agent():
    def __init__(self,shape, time_stamps = 200):
        self.shape = shape
        # represent t value from 0 to given t
        self.t = time_stamps

    def forward(self,observation,param):
        return 0 if np.matmul(param,observation) < 0 else 1

    def forward_episode(self,env,param):
        observation = env.reset()
        total_reward = 0
        for _ in range(self.t):
            action = self.forward(
                observation,
                param)
            observation , reward , done, info = env.step(action)
            total_reward += reward
            if done: break
        return total_reward

    def train(self,env,iterations=10000):
        best_param , best_reward = None , 0
        for _ in range(iterations):
            # change the value space span over -1 and 1
            gened_params = np.random.rand(self.shape) * 2 - 1
            reward = self.forward_episode(env,gened_params)

            # termination condition such reward reaches 200
            if reward == 200: break