import numpy as np
import tensorflow as tf

class Q_Exp_Agent():
    def __init__(self,env,eposide_size=3000):
        self.env = env
        self.shape = env.observation_space.shape
        self.action_shape = env.action_space.n
        self.q_table = {}

        self.replay_frames = []

    def lookup(self, observation):
        self.q_table[str(observation)] = 0
