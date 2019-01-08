from tqdm import tqdm
import numpy as np

class Random_Agent():
    def __init__(self, shape, time_stamps = 200, forward_pass=None):
        self.frames = []
        self.shape = shape

        # represent t value from 0 to given t
        self.t = time_stamps
        if forward_pass:
            self.forward = forward_pass

    def forward(self,observation,param):
        return 0 if np.matmul(param,observation) < 0 else 1

    def forward_episode(self,env,param):
        observation, total_reward, frames  = env.reset(), 0 , []

        for _ in range(self.t):
            action = self.forward(
                observation,
                param)

            # save the frame for visualization
            frames.append(env.render(mode='rgb_array'))

            observation , reward , done, info = env.step(action)
            total_reward += reward
            if done:
                break

        return frames, total_reward

    def train(self,env, nums_eposides=10000):
        best_param = None
        self.best_reward = 0
        for eposide in range(nums_eposides):
            # change the value space span over -1 and 1
            gened_params = np.random.rand(self.shape[0]) * 2 - 1

            frames , reward = self.forward_episode(env,gened_params)
            self.frames.append( (reward, frames) )

            if self.best_reward < reward:
                self.best_reward = reward
            # termination condition such reward reaches 200
            if reward >= 200:
                break

            if eposide % 100 == 0:
                print("Loggering %i , best_reward is %i "%(eposide,self.best_reward))